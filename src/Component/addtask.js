import React, { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Dash1 from './Dashboard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/custom.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [editTask, setEditTask] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPriority, setEditPriority] = useState('Low');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const priorityToNumber = (priority) => {
    switch (priority) {
      case 'Low':
        return 1;
      case 'Medium':
        return 2;
      case 'High':
        return 3;
      default:
        return 0;
    }
  };

  const handleAddTask = () => {
    if (!newTask || !taskDescription) {
      setSnackbarOpen(true);
      setSnackbarMessage('Please fill in both Task and Description fields.');
      return;
    }

    const newTaskObject = {
      task: newTask,
      description: taskDescription,
      priority,
      date: selectedDate,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
    setTaskDescription('');
    setPriority('Low');
    setSelectedDate(new Date());
    setSnackbarOpen(true);
    setSnackbarMessage('Task successfully added!');
  };

  const handleEditTask = (index) => {
    const { task, description, priority, date } = tasks[index];
    setEditTask(task);
    setEditDescription(description);
    setEditPriority(priority);
    setSelectedDate(new Date(date));
    setEditIndex(index);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = {
      task: editTask,
      description: editDescription,
      priority: editPriority,
      date: selectedDate,
    };
    setTasks(updatedTasks);
    setEditDialogOpen(false);
    setSnackbarOpen(true);
    setSnackbarMessage('Task successfully edited!');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setSnackbarOpen(true);
    setSnackbarMessage('Task successfully deleted!');
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dash1 />
      <Paper elevation={3} style={{
        backgroundColor: '#D3E6CC',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '50px'
      }}>
        <Typography variant="h5" gutterBottom>
          Task Manager
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '48%' }}>
            <TextField
              label="Task"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                label="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth style={{ marginTop: '10px' }}>
              Add Task
            </Button>
          </div>
          <div style={{ width: '48%', marginLeft: '4%' }}>
            <Calendar onChange={handleDateChange} value={selectedDate} className="calendar-container" />
          </div>
        </div>

        <List style={{ marginTop: '20px', width: '100%' }}>
          {tasks
            .sort((a, b) => priorityToNumber(b.priority) - priorityToNumber(a.priority))
            .map((task, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      <strong>{`${index + 1}. ${task.task}`}</strong>
                    </Typography>
                  }
                  secondary={`Date: ${task.date.toDateString()}, ${task.description}, Priority: ${task.priority}`}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleEditTask(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteTask(index)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>

        <Dialog open={isEditDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              label="Edit Task"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <TextField
              label="Edit Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="edit-priority-label">Priority</InputLabel>
              <Select
                label="Priority"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <Calendar onChange={handleDateChange} value={selectedDate} className="calendar-container" />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          style={{ backgroundColor: snackbarMessage.includes('added') ? '#43a047' : '#e53935' }}
        />
      </Paper>
    </>
  );
};

export default TaskList;
