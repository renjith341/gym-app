// Central exercise catalog — categories and common exercises across all plans

export const CATEGORIES = [
  'Full Body', 'Upper', 'Lower', 'Push', 'Pull', 'Legs', 'Cardio', 'Core', 'Recovery',
];

export const EXERCISES = [
  // Full Body
  { name: 'Goblet Squat',           category: 'Full Body', equipment: 'dumbbell' },
  { name: 'Dumbbell Romanian Deadlift', category: 'Full Body', equipment: 'dumbbell' },
  { name: 'Kettlebell Swing',        category: 'Full Body', equipment: 'kettlebell' },
  { name: 'Barbell Deadlift',        category: 'Full Body', equipment: 'barbell' },
  // Push
  { name: 'Bench Press',            category: 'Push', equipment: 'barbell' },
  { name: 'Overhead Press',         category: 'Push', equipment: 'barbell' },
  { name: 'Incline Dumbbell Press', category: 'Push', equipment: 'dumbbell' },
  { name: 'Dumbbell Lateral Raise', category: 'Push', equipment: 'dumbbell' },
  { name: 'Tricep Pushdown',        category: 'Push', equipment: 'cable' },
  { name: 'Dips',                   category: 'Push', equipment: 'bodyweight' },
  { name: 'Push-ups',               category: 'Push', equipment: 'bodyweight' },
  // Pull
  { name: 'Pull-ups',               category: 'Pull', equipment: 'bodyweight' },
  { name: 'Barbell Row',            category: 'Pull', equipment: 'barbell' },
  { name: 'Dumbbell Row',           category: 'Pull', equipment: 'dumbbell' },
  { name: 'Lat Pulldown',           category: 'Pull', equipment: 'cable' },
  { name: 'Seated Cable Row',       category: 'Pull', equipment: 'cable' },
  { name: 'Barbell Curl',           category: 'Pull', equipment: 'barbell' },
  { name: 'Hammer Curl',            category: 'Pull', equipment: 'dumbbell' },
  { name: 'Face Pull',              category: 'Pull', equipment: 'cable' },
  // Legs
  { name: 'Barbell Squat',         category: 'Legs', equipment: 'barbell' },
  { name: 'Leg Press',             category: 'Legs', equipment: 'machine' },
  { name: 'Leg Curl',              category: 'Legs', equipment: 'machine' },
  { name: 'Leg Extension',         category: 'Legs', equipment: 'machine' },
  { name: 'Lunges',                category: 'Legs', equipment: 'dumbbell' },
  { name: 'Bulgarian Split Squat', category: 'Legs', equipment: 'dumbbell' },
  { name: 'Hip Thrust',            category: 'Legs', equipment: 'barbell' },
  { name: 'Calf Raises',           category: 'Legs', equipment: 'machine' },
  // Core
  { name: 'Plank',                 category: 'Core', equipment: 'bodyweight' },
  { name: 'Ab Wheel Rollout',      category: 'Core', equipment: 'ab wheel' },
  { name: 'Cable Crunch',          category: 'Core', equipment: 'cable' },
  { name: 'Hanging Leg Raise',     category: 'Core', equipment: 'bodyweight' },
  // Cardio
  { name: 'Treadmill Walk',        category: 'Cardio', equipment: 'machine' },
  { name: 'Stationary Bike',       category: 'Cardio', equipment: 'machine' },
  { name: 'Rowing Machine',        category: 'Cardio', equipment: 'machine' },
  { name: 'Jump Rope',             category: 'Cardio', equipment: 'jump rope' },
];
