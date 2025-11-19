import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { DatePickerModule } from 'primeng/datepicker';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppointmentService } from '../../../core/services/appointment.service';
import { ClientService } from '../../../core/services/client.service';
import { VehicleService } from '../../../core/services/vehicle.service';
import { MechanicService } from '../../../core/services/mechanic.service';
import { ServiceService } from '../../../core/services/service.service';
import { Appointment } from '../../../shared/models/appointment.model';
import { Client } from '../../../shared/models/client.model';
import { Vehicle } from '../../../shared/models/vehicle.model';
import { Mechanic } from '../../../shared/models/mechanic.model';
import { Service } from '../../../shared/models/service.model';
import { TagSeverity } from '../../../shared/models/ui.model';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-appointment-getall',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    ConfirmDialogModule,
    ToastModule,
    TagModule,
    DatePickerModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './appointment-getall.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppointmentGetallComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  clients: Client[] = [];
  vehicles: Vehicle[] = [];
  mechanics: Mechanic[] = [];
  services: Service[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';
  dateFilter: Date | null = null;
  loading: boolean = false;

  statusOptions = [
    { label: 'Todas', value: 'all' },
    { label: 'Programada', value: 'scheduled' },
    { label: 'En Progreso', value: 'in-progress' },
    { label: 'Completada', value: 'completed' },
    { label: 'Cancelada', value: 'cancelled' }
  ];

  constructor(
    private appointmentService: AppointmentService,
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private mechanicService: MechanicService,
    private serviceService: ServiceService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.loadAppointments();
    this.loadClients();
    this.loadVehicles();
    this.loadMechanics();
    this.loadServices();
  }

  loadAppointments() {
    console.log('📅 [AppointmentGetAll] Cargando citas...');
    this.loading = true;
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) => {
        console.log('✅ [AppointmentGetAll] Citas recibidas:', appointments);
        console.log('✅ [AppointmentGetAll] Cantidad de citas:', appointments.length);
        this.appointments = appointments;
        this.applyFilters();
        console.log('✅ [AppointmentGetAll] Citas filtradas:', this.filteredAppointments.length);
        this.loading = false;
      },
      error: (error: any) => {
        console.error('❌ [AppointmentGetAll] Error cargando citas:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al cargar las citas'
        });
        this.loading = false;
      }
    });
  }

  loadClients() {
    console.log('👥 [AppointmentGetAll] Cargando clientes...');
    this.clientService.getClients().subscribe({
      next: (clients: any[]) => {
        console.log('✅ [AppointmentGetAll] Clientes recibidos:', clients.length);
        this.clients = clients;
      },
      error: (error: any) => {
        console.error('❌ [AppointmentGetAll] Error cargando clientes:', error);
      }
    });
  }

  loadVehicles() {
    console.log('🚗 [AppointmentGetAll] Cargando vehículos...');
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles: any[]) => {
        console.log('✅ [AppointmentGetAll] Vehículos recibidos:', vehicles.length);
        this.vehicles = vehicles;
      },
      error: (error: any) => {
        console.error('❌ [AppointmentGetAll] Error cargando vehículos:', error);
      }
    });
  }

  loadMechanics() {
    this.mechanicService.getMechanics().subscribe({
      next: (mechanics: any[]) => {
        this.mechanics = mechanics;
      },
      error: (error: any) => {
        console.error('Error cargando mecánicos:', error);
      }
    });
  }

  loadServices() {
    this.serviceService.getServices().subscribe({
      next: (services: any[]) => {
        this.services = services;
      },
      error: (error: any) => {
        console.error('Error cargando servicios:', error);
      }
    });
  }

  applyFilters() {
    console.log('🔍 [AppointmentGetAll] Aplicando filtros...');
    console.log('🔍 [AppointmentGetAll] Total citas:', this.appointments.length);
    console.log('🔍 [AppointmentGetAll] searchTerm:', this.searchTerm);
    console.log('🔍 [AppointmentGetAll] statusFilter:', this.statusFilter);
    console.log('🔍 [AppointmentGetAll] dateFilter:', this.dateFilter);
    
    this.filteredAppointments = this.appointments.filter(appointment => {
      const matchesSearch = !this.searchTerm || 
        this.getClientName(appointment.clientId.toString()).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        this.getVehicleInfo(appointment.vehicleId.toString()).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (appointment.notes && appointment.notes.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesStatus = this.statusFilter === 'all' || 
        appointment.status === this.statusFilter;
      
      const matchesDate = !this.dateFilter || 
        new Date(appointment.appointmentDate).toDateString() === this.dateFilter.toDateString();
      
      return matchesSearch && matchesStatus && matchesDate;
    });
    
    console.log('✅ [AppointmentGetAll] Citas después de filtros:', this.filteredAppointments.length);
  }

  onSearch() {
    this.applyFilters();
  }

  onStatusFilterChange() {
    this.applyFilters();
  }

  onDateFilterChange() {
    this.applyFilters();
  }

  clearFilters() {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.dateFilter = null;
    this.applyFilters();
  }

  viewAppointment(appointment: Appointment) {
    const config = {
      title: 'Detalles de la Cita',
      subtitle: `${this.getClientName(appointment.clientId.toString())} - ${this.getVehicleInfo(appointment.vehicleId.toString())}`,
      headerIcon: 'pi pi-calendar',
      headerColor: 'rgba(99, 102, 241, 0.2)',
      sections: [
        {
          title: 'Información de la Cita',
          icon: 'pi pi-calendar',
          fields: [
            { 
              label: 'Fecha', 
              value: appointment.appointmentDate, 
              icon: 'pi pi-calendar', 
              type: 'datetime' as const
            },
            { 
              label: 'Estado', 
              value: this.getStatusText(appointment.status),
              type: 'badge' as const,
              badgeClass: this.getStatusSeverity(appointment.status) === 'success' ? 'badge-success' : 
                          this.getStatusSeverity(appointment.status) === 'warn' ? 'badge-warning' :
                          this.getStatusSeverity(appointment.status) === 'danger' ? 'badge-danger' : 'badge-info'
            },
            { 
              label: 'Notas', 
              value: appointment.notes || 'Sin notas', 
              icon: 'pi pi-file-edit', 
              type: 'text' as const
            }
          ]
        },
        {
          title: 'Cliente y Vehículo',
          icon: 'pi pi-user',
          fields: [
            { 
              label: 'Cliente', 
              value: this.getClientName(appointment.clientId.toString()), 
              icon: 'pi pi-user', 
              type: 'text' as const
            },
            { 
              label: 'Vehículo', 
              value: this.getVehicleInfo(appointment.vehicleId.toString()), 
              icon: 'pi pi-car', 
              type: 'text' as const
            }
          ]
        },
        {
          title: 'Servicio y Mecánico',
          icon: 'pi pi-cog',
          fields: [
            { 
              label: 'Servicio', 
              value: this.getServiceName(appointment.serviceId.toString()), 
              icon: 'pi pi-cog', 
              type: 'text' as const
            },
            { 
              label: 'Mecánico Asignado', 
              value: this.getMechanicName(appointment.mechanicId.toString()), 
              icon: 'pi pi-wrench', 
              type: 'text' as const
            }
          ]
        }
      ],
      showEdit: true,
      showDelete: true
    };
    
    this.modalService.openViewModal(config, {
      onEdit: () => {
        this.modalService.closeViewModal();
        this.editAppointment(appointment.id);
      },
      onDelete: () => {
        this.modalService.closeViewModal();
        this.confirmDeleteAppointment(appointment);
      }
    });
  }

  editAppointment(id: number) {
    this.router.navigate(['/appointments/update', id]);
  }

  confirmDeleteAppointment(appointment: Appointment) {
    this.modalService.openDeleteModal(
      {
        title: '¿Eliminar Cita?',
        message: 'Esta acción no se puede deshacer. La cita será eliminada permanentemente.',
        itemName: `${this.getClientName(appointment.clientId.toString())} - ${new Date(appointment.appointmentDate).toLocaleString()}`,
        itemLabel: 'Cita a eliminar:',
        showWarning: true,
        warningMessage: '⚠️ Se perderá toda la información relacionada con esta cita.'
      },
      async () => {
        try {
          await this.appointmentService.deleteAppointment(appointment.id).toPromise();
          this.messageService.add({
            severity: 'success',
            summary: '¡Éxito!',
            detail: 'Cita eliminada correctamente',
            life: 3000
          });
          this.loadAppointments();
        } catch (error) {
          console.error('Error eliminando cita:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al eliminar la cita',
            life: 3000
          });
          throw error;
        }
      }
    );
  }

  deleteAppointment(id: number) {
    const appointment = this.appointments.find(a => a.id === id);
    if (appointment) {
      this.confirmDeleteAppointment(appointment);
    }
  }

  createAppointment() {
    this.router.navigate(['/appointments/create']);
  }

  getStatusSeverity(status: string): TagSeverity {
    switch (status) {
      case 'scheduled': return 'info';
      case 'in-progress': return 'warn';
      case 'completed': return 'success';
      case 'cancelled': return 'danger';
      default: return 'info';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'scheduled': return 'Programada';
      case 'in-progress': return 'En Progreso';
      case 'completed': return 'Completada';
      case 'cancelled': return 'Cancelada';
      default: return status;
    }
  }

  getClientName(clientId: string): string {
    const client = this.clients.find(c => c.id.toString() === clientId);
    if (!client) {
      console.warn('⚠️ [AppointmentGetAll] Cliente no encontrado:', clientId, 'Total clientes:', this.clients.length);
    }
    return client ? client.name : 'Cliente no encontrado';
  }

  getVehicleInfo(vehicleId: string): string {
    const vehicle = this.vehicles.find(v => v.id.toString() === vehicleId);
    if (!vehicle) {
      console.warn('⚠️ [AppointmentGetAll] Vehículo no encontrado:', vehicleId, 'Total vehículos:', this.vehicles.length);
    }
    return vehicle ? `${vehicle.make} ${vehicle.model}` : 'Vehículo no encontrado';
  }

  getMechanicName(mechanicId: string): string {
    const mechanic = this.mechanics.find(m => m.id.toString() === mechanicId);
    if (!mechanic) {
      console.warn('⚠️ [AppointmentGetAll] Mecánico no encontrado:', mechanicId, 'Total mecánicos:', this.mechanics.length);
    }
    return mechanic ? `${mechanic.firstName} ${mechanic.lastName}` : 'Mecánico no encontrado';
  }

  getServiceName(serviceId: string): string {
    const service = this.services.find(s => s.id.toString() === serviceId);
    if (!service) {
      console.warn('⚠️ [AppointmentGetAll] Servicio no encontrado:', serviceId, 'Total servicios:', this.services.length);
    }
    return service ? service.name : 'Servicio no encontrado';
  }
}