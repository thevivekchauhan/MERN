// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Chip,
//   IconButton,
//   useTheme,
//   useMediaQuery,
//   LinearProgress,
//   Avatar,
//   AvatarGroup,
//   Button,
// } from '@mui/material';
// import {
//   Assignment,
//   CheckCircle,
//   Pending,
//   Warning,
//   Comment,
//   Add as AddIcon,
//   TrendingUp,
//   CalendarToday,
//   Group,
//   ArrowForward,
//   Message,
//   AccessTime,
//   DateRange,
// } from '@mui/icons-material';

// const Dashboard = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [stats] = useState({
//     tasks: {
//       total: 24,
//       completed: 18,
//       inProgress: 4,
//       pending: 2,
//     },
//     projects: {
//       active: 3,
//       completed: 5,
//       upcoming: 2,
//     },
//     messages: {
//       unread: 5,
//       total: 28,
//     },
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     });
//   };

//   const formatDate = (date) => {
//     const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     };
//     return date.toLocaleDateString([], options);
//   };

//   const StatCard = ({ title, value, icon, color }) => (
//     <Paper
//       elevation={0}
//       sx={{
//         p: 3,
//         height: '100%',
//         borderRadius: 2,
//         border: '1px solid',
//         borderColor: 'divider',
//         '&:hover': {
//           boxShadow: 2,
//         },
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//         <Box
//           sx={{
//             width: 48,
//             height: 48,
//             borderRadius: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             bgcolor: `${color}15`,
//             color: color,
//             mr: 2,
//           }}
//         >
//           {icon}
//         </Box>
//         <Box>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             {value}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {title}
//           </Typography>
//         </Box>
//       </Box>
//     </Paper>
//   );

//   const TaskItem = ({ task }) => {
//     const getStatusColor = (status) => {
//       switch (status) {
//         case 'completed':
//           return 'success';
//         case 'pending':
//           return 'warning';
//         case 'overdue':
//           return 'error';
//         default:
//           return 'default';
//       }
//     };

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Paper
//           elevation={0}
//           sx={{
//             mb: 2,
//             p: 2,
//             borderRadius: 2,
//             border: '1px solid',
//             borderColor: 'divider',
//             '&:hover': {
//               boxShadow: 2,
//             },
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <Avatar
//               sx={{
//                 width: 40,
//                 height: 40,
//                 bgcolor: `${theme.palette.primary.main}15`,
//                 color: 'primary.main',
//                 mr: 2,
//               }}
//             >
//               <Assignment />
//             </Avatar>
//             <Box sx={{ flexGrow: 1 }}>
//               <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
//                 {task.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {task.project}
//               </Typography>
//             </Box>
//             <Chip
//               label={task.status}
//               color={getStatusColor(task.status)}
//               size="small"
//               sx={{ ml: 2 }}
//             />
//           </Box>

//           <Box sx={{ mb: 2 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//               <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
//               <Typography variant="body2" color="text.secondary">
//                 Due: {task.deadline}
//               </Typography>
//             </Box>
//             <LinearProgress
//               variant="determinate"
//               value={task.progress}
//               sx={{
//                 height: 6,
//                 borderRadius: 3,
//                 bgcolor: `${theme.palette.primary.main}15`,
//                 '& .MuiLinearProgress-bar': {
//                   borderRadius: 3,
//                 },
//               }}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Button
//               size="small"
//               startIcon={<Comment />}
//               sx={{ color: 'text.secondary' }}
//             >
//               Add Comment
//             </Button>
//             <Button
//               size="small"
//               endIcon={<ArrowForward />}
//               color="primary"
//             >
//               View Details
//             </Button>
//           </Box>
//         </Paper>
//       </motion.div>
//     );
//   };

//   return (
//     <Box sx={{ p: isMobile ? 1 : 3 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Box sx={{ mb: 4 }}>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
//             Welcome back, Icoderz Army!
//           </Typography>

//           {/* Clock and Calendar Section */}
//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} md={6}>
//               <Paper
//                 elevation={0}
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   borderRadius: 2,
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   bgcolor: 'background.paper',
//                 }}
//               >
//                 <AccessTime sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
//                 <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
//                   {formatTime(currentTime)}
//                 </Typography>
//                 <Typography variant="h6" color="text.secondary">
//                   {formatDate(currentTime)}
//                 </Typography>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Paper
//                 elevation={0}
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   borderRadius: 2,
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                   <DateRange sx={{ fontSize: 30, color: 'primary.main', mr: 2 }} />
//                   <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                     Calendar
//                   </Typography>
//                 </Box>

//                 <Box sx={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(7, 1fr)',
//                   gap: 1,
//                   textAlign: 'center',
//                   mb: 2
//                 }}>
//                   {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
//                     <Typography key={day} variant="body2" color="text.secondary">
//                       {day}
//                     </Typography>
//                   ))}
//                 </Box>

//                 <Box sx={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(7, 1fr)',
//                   gap: 1,
//                   textAlign: 'center'
//                 }}>
//                   {Array.from({ length: 35 }).map((_, index) => {
//                     const day = index - currentTime.getDay() + 1;
//                     const isCurrentMonth = day > 0 && day <= new Date(
//                       currentTime.getFullYear(),
//                       currentTime.getMonth() + 1,
//                       0
//                     ).getDate();
//                     const isToday = isCurrentMonth && day === currentTime.getDate();

//                     return (
//                       <Box
//                         key={index}
//                         sx={{
//                           p: 1,
//                           borderRadius: '50%',
//                           bgcolor: isToday ? 'primary.main' : 'transparent',
//                           color: isToday ? 'common.white' : 'text.primary',
//                           fontWeight: isToday ? 'bold' : 'normal',
//                           opacity: isCurrentMonth ? 1 : 0.5,
//                           cursor: 'pointer',
//                           '&:hover': {
//                             bgcolor: isToday ? 'primary.dark' : 'action.hover',
//                           }
//                         }}
//                       >
//                         {isCurrentMonth ? day : ''}
//                       </Box>
//                     );
//                   })}
//                 </Box>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AccessTime, DateRange } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString([], options);
  };

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const calendarDays = generateCalendarDays(currentTime);

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Welcome back, Icoderz Army!
        </Typography>
<Box>
</Box>
        <Box sx={{ mb: 4 }}>
          {/* Clock and Calendar Section */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {/* Premium Clock Design */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, rgba(25,118,210,0.1) 0%, rgba(25,118,210,0.2) 100%)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTime
                    sx={{ fontSize: 20, color: "primary.main", mr: 1 }}
                  />
                  <Typography variant="body2" color="primary.main">
                    LIVE
                  </Typography>
                </Box>

                <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
                  {formatDate(currentTime)}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "4.5rem",
                      lineHeight: 1,
                      background:
                        "linear-gradient(45deg, #1976d2 0%, #115293 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {formatTime(currentTime).split(":")[0]}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      mx: 0.5,
                      color: "text.secondary",
                    }}
                  >
                    :
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "4.5rem",
                      lineHeight: 1,
                      background:
                        "linear-gradient(45deg, #1976d2 0%, #115293 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {formatTime(currentTime).split(":")[1]}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      ml: 1,
                      color: "text.secondary",
                    }}
                  >
                    {formatTime(currentTime).split(" ")[1]}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    color: "text.secondary",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {currentTime.toLocaleTimeString([], { second: "2-digit" })}{" "}
                  seconds
                </Typography>
              </Paper>
            </Grid>

            {/* Premium Calendar Design */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <DateRange
                    sx={{
                      fontSize: 30,
                      color: "primary.main",
                      mr: 2,
                      background:
                        "linear-gradient(45deg, #1976d2 0%, #115293 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {currentTime.toLocaleDateString([], {
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                </Box>

                {/* Day headers */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 1,
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, index) => (
                      <Typography
                        key={day}
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color:
                            index === 0 || index === 6
                              ? "error.main"
                              : "text.secondary",
                          p: 1,
                        }}
                      >
                        {day}
                      </Typography>
                    )
                  )}
                </Box>

                {/* Calendar days */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 1,
                    textAlign: "center",
                  }}
                >
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return <Box key={`empty-${index}`} sx={{ p: 2 }} />;
                    }

                    const dayOfWeek = new Date(
                      currentTime.getFullYear(),
                      currentTime.getMonth(),
                      day
                    ).getDay();

                    const isToday =
                      day === currentTime.getDate() &&
                      currentTime.getMonth() === new Date().getMonth() &&
                      currentTime.getFullYear() === new Date().getFullYear();

                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                    return (
                      <Box
                        key={`day-${day}`}
                        sx={{
                          p: 1.5,
                          borderRadius: "50%",
                          bgcolor: isToday ? "primary.main" : "transparent",
                          color: isToday
                            ? "common.white"
                            : isWeekend
                            ? "error.main"
                            : "text.primary",
                          fontWeight: isToday ? "bold" : "medium",
                          cursor: "pointer",
                          position: "relative",
                          "&:hover": {
                            bgcolor: isToday ? "primary.dark" : "action.hover",
                          },
                          "&:after": isToday
                            ? {
                                content: '""',
                                position: "absolute",
                                bottom: 4,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: "common.white",
                              }
                            : {},
                        }}
                      >
                        {day}
                      </Box>
                    );
                  })}
                </Box>

                {/* Calendar footer */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "auto",
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {currentTime.toLocaleDateString([], { weekday: "long" })}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {currentTime.getDate()}{" "}
                    {currentTime.toLocaleDateString([], { month: "short" })}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Dashboard;
