const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel');

// POST: Create new project
router.post('/', async (req, res) => {
  console.log('Received project creation request:', req.body);
  try {
    const { name, description, startDate, endDate, progress, status } = req.body;
    
    console.log('Creating new project with data:', {
      name, description, startDate, endDate, progress, status
    });

    // Create new project
    const newProject = new Project({
      name,
      description,
      startDate: startDate || null,
      endDate: endDate || null,
      progress: progress || 0,
      status: status || 'Active'
    });

    // Save to database
    const savedProject = await newProject.save();
    console.log('Project created successfully:', savedProject);

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      project: savedProject
    });
  } catch (error) {
    console.error('Project creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create project',
      error: error.message
    });
  }
});

// GET: Get all projects
router.get('/', async (req, res) => {
  console.log('Fetching all projects');
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    console.log(`Found ${projects.length} projects`);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message
    });
  }
});

// GET: Get single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
      error: error.message
    });
  }
});

// PUT: Update project
router.put('/:id', async (req, res) => {
  try {
    const { name, description, startDate, endDate, progress, status } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        startDate,
        endDate,
        progress,
        status
      },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    res.json({
      success: true,
      message: 'Project updated successfully',
      project: updatedProject
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update project',
      error: error.message
    });
  }
});

// DELETE: Delete project
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete project',
      error: error.message
    });
  }
});

module.exports = router;
