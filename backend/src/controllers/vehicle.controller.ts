import { Request, Response } from 'express';
import { Vehicle } from '../models/vehicle.model';
import { getChangedFields } from '../utils/diff.util';

export const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching vehicles' });
  }
};

export const createVehicle = async (req: Request, res: Response) => {
  try {
    // Validar campos requeridos
    const { licensePlate, make, brand, model, year, color, vin, clientId, active } = req.body;

    if (!licensePlate || !make || !brand || !model || !year || !color || !vin || !clientId) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // Convertir clientId a número si viene como string
    const vehicleData = {
      licensePlate,
      make,
      brand,
      model,
      year: parseInt(year),
      color,
      vin,
      clientId: parseInt(clientId),
      status: 'ACTIVE' as 'ACTIVE' | 'INACTIVE',
      active: active !== false
    };

    const vehicle = await Vehicle.create(vehicleData);
    res.status(201).json(vehicle);
  } catch (error: any) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ 
      error: 'Error creating vehicle',
      message: error.message,
      details: error.errors ? error.errors.map((e: any) => e.message) : undefined
    });
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    
    // Convertir clientId a número si viene como string
    const updateData = { ...req.body };
    if (updateData.clientId) {
      updateData.clientId = parseInt(updateData.clientId);
    }
    if (updateData.year) {
      updateData.year = parseInt(updateData.year);
    }
    
    const { changes, changedKeys } = getChangedFields(vehicle, updateData);
    if (changedKeys.length === 0) {
      return res.status(200).json({ message: 'No changes detected', vehicle });
    }
    await vehicle.update(changes);
    res.json(vehicle);
  } catch (error: any) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ 
      error: 'Error updating vehicle',
      message: error.message 
    });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    await vehicle.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting vehicle' });
  }
};
