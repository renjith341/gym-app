// Beginner Plan — 6 months, 3 days/week, full body
// Progression: Full Body foundation → A/B split → Upper/Lower lite

export const beginnerPlan = [
  {
    id: 1, label: "Month 1", theme: "Foundation",
    description: "Build the habit, learn the movements. 3 days/week full body with basic compound lifts.",
    gradient: ["#16a34a","#15803d"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"Learning the Movements",
        note:"Light weight only — this week is about form. Record yourself if you can.",
        days:[
          {day:"Day 1",label:"Full Body A",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Goblet Squat",sets:3,reps:"10",rest:"90s",tip:"Hold dumbbell at chest, heels flat, squat to parallel"},
            {name:"Dumbbell Bench Press",sets:3,reps:"10",rest:"90s",tip:"Lower slowly 3 sec, light weight, feel the chest working"},
            {name:"Seated Cable Row",sets:3,reps:"10",rest:"90s",tip:"Sit tall, pull to belly button, squeeze shoulder blades"},
            {name:"Plank",sets:3,reps:"20s",rest:"60s",tip:"Straight line from head to heel, breathe steadily"},
            {name:"Treadmill Walk",sets:1,reps:"10 min",rest:"—",tip:"Brisk pace to warm up and cool down"},
          ]},
          {day:"Day 2",label:"Full Body B",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Feet shoulder-width, press through heels, don't lock knees"},
            {name:"Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Wide grip, lean slightly back, pull bar to upper chest"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"90s",tip:"Core tight, press straight up, lower under control"},
            {name:"Dumbbell Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Push hips back, slight knee bend, feel hamstrings stretch"},
            {name:"Dead Bug Exercise",sets:3,reps:"8 each",rest:"60s",tip:"Lie on back, extend opposite arm and leg, keep low back flat"},
          ]},
          {day:"Day 3",label:"Full Body C",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Dumbbell Lunges",sets:3,reps:"8 each leg",rest:"90s",tip:"Step forward, lower back knee to floor, push back up"},
            {name:"Incline Dumbbell Press",sets:3,reps:"10",rest:"90s",tip:"30-degree incline, elbows 45° from body"},
            {name:"Single Arm Dumbbell Row",sets:3,reps:"10 each",rest:"90s",tip:"Brace on bench, pull to hip, feel back — not bicep"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"12",rest:"60s",tip:"Lead with elbows, stop at shoulder height"},
            {name:"Plank",sets:3,reps:"20s",rest:"60s",tip:"Same as Day 1 — focus on getting longer hold time"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"Adding Consistency",
        note:"Same movements, add 1-2 reps or a tiny bit of weight where last week felt easy.",
        days:[
          {day:"Day 1",label:"Full Body A+",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Goblet Squat",sets:3,reps:"12",rest:"90s",tip:"Add a small weight if 10 felt easy. Go deeper this week"},
            {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"90s",tip:"2.5kg more each side if last week was comfortable"},
            {name:"Seated Cable Row",sets:3,reps:"12",rest:"90s",tip:"Add 5kg on the stack, same form"},
            {name:"Plank",sets:3,reps:"25s",rest:"60s",tip:"5 more seconds — that's all"},
            {name:"Treadmill Walk",sets:1,reps:"12 min",rest:"—",tip:"Increase incline to 2% this week"},
          ]},
          {day:"Day 2",label:"Full Body B+",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Add 10kg on the machine if last week felt easy"},
            {name:"Lat Pulldown",sets:3,reps:"12",rest:"90s",tip:"Small weight increase — keep form perfect"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"12",rest:"90s",tip:"Try same weight, hit 12 clean reps"},
            {name:"Dumbbell Romanian Deadlift",sets:3,reps:"12",rest:"90s",tip:"Hold the stretch at bottom for 1 second"},
            {name:"Dead Bug Exercise",sets:3,reps:"10 each",rest:"60s",tip:"2 more reps each side — very slow and controlled"},
          ]},
          {day:"Day 3",label:"Full Body C+",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Dumbbell Lunges",sets:3,reps:"10 each leg",rest:"90s",tip:"2 more reps per leg. Keep torso upright"},
            {name:"Incline Dumbbell Press",sets:3,reps:"12",rest:"90s",tip:"Hit 12 reps with same weight before adding more"},
            {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"90s",tip:"Pause at the top for 1 second"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Light weight, really feel the shoulders working"},
            {name:"Plank",sets:3,reps:"30s",rest:"60s",tip:"10 more seconds than Week 1!"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Building Volume",
        note:"Add one extra set to your main lifts. You should feel stronger this week.",
        days:[
          {day:"Day 1",label:"Full Body A — 4 sets",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Goblet Squat",sets:4,reps:"10",rest:"90s",tip:"Extra set — slightly heavier than Week 2"},
            {name:"Dumbbell Bench Press",sets:4,reps:"10",rest:"90s",tip:"Push with control — 4 sets total"},
            {name:"Seated Cable Row",sets:4,reps:"10",rest:"90s",tip:"4 sets, focus on squeezing shoulder blades at the top"},
            {name:"Plank",sets:3,reps:"30s",rest:"60s",tip:"Maintaining the 30s hold from Week 2"},
            {name:"Treadmill Walk",sets:1,reps:"15 min",rest:"—",tip:"Incline 3%, brisk pace"},
          ]},
          {day:"Day 2",label:"Full Body B — 4 sets",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Leg Press Machine",sets:4,reps:"12",rest:"90s",tip:"Add weight from Week 2 slightly"},
            {name:"Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"4 sets, slow on the way back up"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"90s",tip:"4 sets, rest fully between each"},
            {name:"Dumbbell Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Add some weight from Week 2"},
            {name:"Dead Bug Exercise",sets:3,reps:"10 each",rest:"60s",tip:"Very slow and deliberate"},
          ]},
          {day:"Day 3",label:"Full Body C — 4 sets",tag:"Strength",color:"#16a34a",exercises:[
            {name:"Dumbbell Lunges",sets:4,reps:"10 each",rest:"90s",tip:"4 sets — you've got this"},
            {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"90s",tip:"4 sets with small weight increase"},
            {name:"Single Arm Dumbbell Row",sets:4,reps:"10 each",rest:"90s",tip:"4 sets — really squeeze at the top"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Same as last week — form over weight"},
            {name:"Plank",sets:3,reps:"35s",rest:"60s",tip:"Push a little further"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Deload & Consolidate",
        note:"Drop back to 3 sets, lighter weight. Let your body recover and get ready for Month 2.",
        days:[
          {day:"Day 1",label:"Full Body — Deload",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Goblet Squat",sets:3,reps:"10",rest:"90s",tip:"70% of your Week 3 weight. Focus only on form"},
            {name:"Dumbbell Bench Press",sets:3,reps:"10",rest:"90s",tip:"Light and controlled — enjoy the recovery"},
            {name:"Seated Cable Row",sets:3,reps:"10",rest:"90s",tip:"Feel the muscle working, not the weight"},
            {name:"Plank",sets:3,reps:"30s",rest:"60s",tip:"Keep it"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Easy pace, enjoy the active recovery"},
          ]},
          {day:"Day 2",label:"Mobility Day",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"45s each",rest:"—",tip:"Kneeling lunge, push hips forward gently"},
            {name:"Cat Cow Stretch",sets:3,reps:"10 reps",rest:"—",tip:"Breathe deeply through the movement"},
            {name:"Glute Bridge",sets:3,reps:"15",rest:"60s",tip:"Drive hips up, squeeze glutes at top, slow down"},
            {name:"Band Pull Apart",sets:3,reps:"15",rest:"—",tip:"Arms straight, open chest, squeeze between shoulder blades"},
            {name:"Child's Pose",sets:3,reps:"30s",rest:"—",tip:"Reach arms forward, breathe into your lower back"},
          ]},
          {day:"Day 3",label:"Full Body — Deload",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Light, easy — you're recovering"},
            {name:"Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Focus on the pull, not the weight"},
            {name:"Dumbbell Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Slow and controlled, feel the hamstrings"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"90s",tip:"Light and smooth"},
            {name:"Dead Bug Exercise",sets:2,reps:"8 each",rest:"60s",tip:"Quality over quantity"},
          ]},
        ]
      },
    ]
  },
  {
    id: 2, label: "Month 2", theme: "Building Strength",
    description: "Compound lifts heavier. Add deadlifts and barbell work where available. 3 days/week.",
    gradient: ["#0d9488","#059669"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"Compound Focus",
        note:"Introduce barbell or heavier compound movements. Aim for challenging but controlled reps.",
        days:[
          {day:"Day 1",label:"Full Body A",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Bar on traps, chest up, squat to parallel, drive through heels"},
            {name:"Barbell Bench Press",sets:4,reps:"8",rest:"2min",tip:"Arch slightly, pull bar to lower chest, drive up"},
            {name:"Barbell Bent Over Row",sets:4,reps:"8",rest:"2min",tip:"Hinge at hips, bar close to body, elbows past hips"},
            {name:"Plank",sets:3,reps:"40s",rest:"60s",tip:"Squeezing glutes and abs hard"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Controlled, no swinging"},
          ]},
          {day:"Day 2",label:"Full Body B",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Bar stays close to legs, push hips back, feel hamstrings load"},
            {name:"Incline Barbell Press",sets:4,reps:"8",rest:"2min",tip:"30-degree incline, bar to upper chest, full range"},
            {name:"Cable Row",sets:4,reps:"10",rest:"90s",tip:"Full stretch at the front, full squeeze at the back"},
            {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"Warm-down — lighter and deep"},
            {name:"Ab Wheel Rollout",sets:3,reps:"8",rest:"60s",tip:"Slow and controlled, don't let back sag"},
          ]},
          {day:"Day 3",label:"Full Body C",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Biggest lift — hips back, chest up, drive floor away, bar stays close"},
            {name:"Overhead Press",sets:4,reps:"8",rest:"2min",tip:"Core braced, press up and slightly back, full lockout"},
            {name:"Pull-Up or Lat Pulldown",sets:4,reps:"8",rest:"2min",tip:"Full hang at bottom, pull chest to bar"},
            {name:"Bulgarian Split Squat",sets:3,reps:"8 each",rest:"90s",tip:"Rear foot on bench, front foot forward, drop straight down"},
            {name:"Plank",sets:3,reps:"40s",rest:"60s",tip:"Keep it strong"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"Progressive Overload",
        note:"Add 2.5kg on barbell lifts that felt easy. Keep perfect form — don't chase weight.",
        days:[
          {day:"Day 1",label:"Full Body A+",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg from Week 1 if you hit all reps cleanly"},
            {name:"Barbell Bench Press",sets:4,reps:"8",rest:"2min",tip:"Same — tiny increment, perfect form"},
            {name:"Barbell Bent Over Row",sets:4,reps:"8",rest:"2min",tip:"Heavier this week"},
            {name:"Plank",sets:3,reps:"45s",rest:"60s",tip:"5 more seconds"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Increase weight slightly or add a drop set"},
          ]},
          {day:"Day 2",label:"Full Body B+",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Add 5kg if last week was smooth"},
            {name:"Incline Barbell Press",sets:4,reps:"8",rest:"2min",tip:"2.5kg each side if you can"},
            {name:"Cable Row",sets:4,reps:"10",rest:"90s",tip:"Add weight to the stack"},
            {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"Heavier dumbbell this week"},
            {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"60s",tip:"2 more reps than last week"},
          ]},
          {day:"Day 3",label:"Full Body C+",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Add 5kg from Week 1 — this is the big one"},
            {name:"Overhead Press",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg"},
            {name:"Pull-Up or Lat Pulldown",sets:4,reps:"8",rest:"2min",tip:"Add weight to pull-ups or increase lat pulldown stack"},
            {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"90s",tip:"2 more reps with same weight"},
            {name:"Plank",sets:3,reps:"45s",rest:"60s",tip:"Hold steady"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Volume Push",
        note:"One more set on main lifts. You're getting stronger — trust the process.",
        days:[
          {day:"Day 1",label:"Full Body A — 5 sets",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"5×5 — a classic strength protocol. Add 2.5kg from Week 2"},
            {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"5×5 — heavier than before"},
            {name:"Barbell Bent Over Row",sets:5,reps:"5",rest:"2.5min",tip:"5×5 row — perfect form"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Finishing move"},
            {name:"Plank",sets:3,reps:"45s",rest:"60s",tip:"Hold it"},
          ]},
          {day:"Day 2",label:"Full Body B — Volume",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Romanian Deadlift",sets:5,reps:"5",rest:"2.5min",tip:"Heavy 5×5"},
            {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Back to 10 reps — more volume, slightly lighter"},
            {name:"Cable Row",sets:4,reps:"12",rest:"90s",tip:"Higher reps — full stretch each rep"},
            {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"Higher volume finishing squat"},
            {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"60s",tip:"Control the movement"},
          ]},
          {day:"Day 3",label:"Full Body C — Volume",tag:"Strength",color:"#0d9488",exercises:[
            {name:"Deadlift",sets:5,reps:"3",rest:"3min",tip:"Heavy triples — this is serious strength work"},
            {name:"Overhead Press",sets:4,reps:"10",rest:"90s",tip:"Back to 10 reps for volume"},
            {name:"Pull-Up or Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"More reps — add weight if too easy"},
            {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"90s",tip:"Same as last week"},
            {name:"Plank",sets:3,reps:"50s",rest:"60s",tip:"Almost a minute!"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Deload",
        note:"Drop to 60% weight, 3 sets. Your muscles are rebuilding for Month 3.",
        days:[
          {day:"Day 1",label:"Deload A",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Back Squat",sets:3,reps:"8",rest:"90s",tip:"60% of your best weight. Smooth and controlled"},
            {name:"Barbell Bench Press",sets:3,reps:"8",rest:"90s",tip:"Light week — focus on the feel"},
            {name:"Barbell Bent Over Row",sets:3,reps:"8",rest:"90s",tip:"Deload but keep form perfect"},
            {name:"Plank",sets:3,reps:"45s",rest:"60s",tip:"Maintaining"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Easy recovery walk"},
          ]},
          {day:"Day 2",label:"Mobility & Stretch",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold each side for a full minute"},
            {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip external rotation stretch — essential for squatters"},
            {name:"Thoracic Extension",sets:3,reps:"10",rest:"—",tip:"Over a foam roller or chair — open the upper back"},
            {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Activate glutes — essential base for all lower body lifts"},
            {name:"Cat Cow Stretch",sets:3,reps:"10",rest:"—",tip:"Breathe through it"},
          ]},
          {day:"Day 3",label:"Deload B",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"60% — just move the bar well"},
            {name:"Overhead Press",sets:3,reps:"8",rest:"90s",tip:"Easy press, enjoy it"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"8",rest:"90s",tip:"Light and smooth"},
            {name:"Romanian Deadlift",sets:3,reps:"8",rest:"90s",tip:"Focus on the stretch"},
            {name:"Dead Bug Exercise",sets:2,reps:"8 each",rest:"60s",tip:"Core check-in"},
          ]},
        ]
      },
    ]
  },
  {
    id: 3, label: "Month 3", theme: "Muscle Building",
    description: "Move to a 3-day A/B split. Push strength and hypertrophy with compound and isolation work.",
    gradient: ["#7c3aed","#db2777"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"New Split Intro",
        note:"A/B/A this week. Next week B/A/B. Rotating keeps you fresh and balanced.",
        days:[
          {day:"Day 1",label:"Workout A — Push + Legs",tag:"Push",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Primary lower body lift — focus on depth"},
            {name:"Barbell Bench Press",sets:4,reps:"8",rest:"2min",tip:"Primary push lift — same form as Month 2"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"90s",tip:"Secondary push after bench"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Volume leg work after squats"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Shoulder finish"},
            {name:"Plank",sets:3,reps:"50s",rest:"60s",tip:"Core finish"},
          ]},
          {day:"Day 2",label:"Workout B — Pull + Hinge",tag:"Pull",color:"#db2777",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"The king — heavy and crisp"},
            {name:"Barbell Bent Over Row",sets:4,reps:"8",rest:"2min",tip:"Pull to lower chest, drive elbows back"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Full range of motion"},
            {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Secondary hinge — higher reps"},
            {name:"Dumbbell Bicep Curl",sets:3,reps:"12",rest:"60s",tip:"Slow negatives — 3s down"},
            {name:"Dead Bug Exercise",sets:3,reps:"10 each",rest:"60s",tip:"Core stability"},
          ]},
          {day:"Day 3",label:"Workout A — Push + Legs",tag:"Push",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Same as Day 1 this week — aiming for same weight"},
            {name:"Incline Barbell Press",sets:4,reps:"8",rest:"2min",tip:"Variation of bench — upper chest focus"},
            {name:"Overhead Press",sets:3,reps:"10",rest:"90s",tip:"Vertical push — keep core tight"},
            {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"90s",tip:"Single leg — great for balance and quad development"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Shoulders again — they need volume"},
            {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"60s",tip:"Core finish"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"Progressive Overload",
        note:"B/A/B rotation this week. Add 2.5–5kg where you hit all reps in Week 1.",
        days:[
          {day:"Day 1",label:"Workout B — Pull + Hinge",tag:"Pull",color:"#db2777",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Add 5kg from last week"},
            {name:"Barbell Bent Over Row",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Increase load or reps"},
            {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Add 5kg"},
            {name:"Dumbbell Bicep Curl",sets:3,reps:"12",rest:"60s",tip:"Heavier or +2 reps"},
            {name:"Dead Bug Exercise",sets:3,reps:"10 each",rest:"60s",tip:"Slow and controlled"},
          ]},
          {day:"Day 2",label:"Workout A — Push + Legs",tag:"Push",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Heavier this week"},
            {name:"Barbell Bench Press",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"90s",tip:"Progress the weight"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Add 10kg on the stack"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Control is king"},
            {name:"Plank",sets:3,reps:"55s",rest:"60s",tip:"Getting close to 1 minute!"},
          ]},
          {day:"Day 3",label:"Workout B — Pull + Hinge",tag:"Pull",color:"#db2777",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Same as Day 1 this week"},
            {name:"Barbell Bent Over Row",sets:4,reps:"8",rest:"2min",tip:"Same"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Same weight"},
            {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Same"},
            {name:"Dumbbell Bicep Curl",sets:3,reps:"12",rest:"60s",tip:"Same"},
            {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"60s",tip:"Replace Dead Bug this session"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Volume Week",
        note:"Add sets on compound lifts. This is the hardest week — push through it.",
        days:[
          {day:"Day 1",label:"Workout A — Volume Push",tag:"Push",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"5×5 heavy squats — the cornerstone"},
            {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"5×5 press — heavy and focused"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"90s",tip:"4 sets now"},
            {name:"Leg Press Machine",sets:4,reps:"12",rest:"90s",tip:"4 sets for leg volume"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Finishing move"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"One full minute — milestone!"},
          ]},
          {day:"Day 2",label:"Workout B — Volume Pull",tag:"Pull",color:"#db2777",exercises:[
            {name:"Deadlift",sets:5,reps:"3",rest:"3min",tip:"Heavy triples — 5 sets"},
            {name:"Barbell Bent Over Row",sets:5,reps:"5",rest:"2.5min",tip:"5×5 rows — match the squat/bench"},
            {name:"Pull-Up or Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"4 sets"},
            {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"4 sets — legs getting hammered"},
            {name:"Dumbbell Bicep Curl",sets:3,reps:"12",rest:"60s",tip:"Volume bicep finish"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"2 more reps than Week 1"},
          ]},
          {day:"Day 3",label:"Workout A — Volume Push",tag:"Push",color:"#7c3aed",exercises:[
            {name:"Incline Barbell Press",sets:5,reps:"5",rest:"2.5min",tip:"Heavy incline this session — variations matter"},
            {name:"Overhead Press",sets:4,reps:"8",rest:"2min",tip:"4 sets on OHP"},
            {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"90s",tip:"4 sets — legs are taking a beating this month"},
            {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Chest isolation — squeeze hard"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Shoulder volume"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Hold the minute"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Deload",
        note:"Scale back. This is mandatory recovery — don't skip it.",
        days:[
          {day:"Day 1",label:"Deload A",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"65% of Week 3 max"},
            {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"65% weight"},
            {name:"Barbell Bent Over Row",sets:3,reps:"8",rest:"90s",tip:"Light and smooth"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Maintain the minute"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery — enjoy it"},
          ]},
          {day:"Day 2",label:"Mobility & Stretch",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold each side"},
            {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener — essential"},
            {name:"Foam Roll Back",sets:2,reps:"60s",rest:"—",tip:"Thoracic mobility"},
            {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Glute activation"},
            {name:"Lat Stretch",sets:3,reps:"30s each",rest:"—",tip:"Hang from bar or stretch arm overhead"},
          ]},
          {day:"Day 3",label:"Deload B",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"60% — move well"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"8",rest:"90s",tip:"Light"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"90s",tip:"Easy"},
            {name:"Romanian Deadlift",sets:3,reps:"8",rest:"90s",tip:"Feel the stretch"},
            {name:"Dead Bug Exercise",sets:2,reps:"8 each",rest:"60s",tip:"Core check"},
          ]},
        ]
      },
    ]
  },
  {
    id: 4, label: "Month 4", theme: "Upper / Lower Split",
    description: "Graduate to a proper 4-day Upper/Lower split. More volume, more frequency per muscle group.",
    gradient: ["#dc2626","#ea580c"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"Split Introduction",
        note:"Upper/Lower split: Mon-Upper, Wed-Lower, Fri-Upper, Sat-Lower (or 4 days you choose).",
        days:[
          {day:"Day 1",label:"Upper A — Strength",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Barbell Bench Press",sets:4,reps:"6",rest:"2.5min",tip:"Heavier than Month 3 — strength focus this session"},
            {name:"Barbell Bent Over Row",sets:4,reps:"6",rest:"2.5min",tip:"Match the press — pull to lower chest"},
            {name:"Overhead Press",sets:3,reps:"8",rest:"2min",tip:"Vertical pressing"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Vertical pulling"},
            {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"60s",tip:"Shoulder health"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core stability"},
          ]},
          {day:"Day 2",label:"Lower A — Strength",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"6",rest:"2.5min",tip:"Strength squats — heavy"},
            {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Hamstring focus — heavy"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Volume legs after squats"},
            {name:"Lying Leg Curl",sets:3,reps:"12",rest:"90s",tip:"Hamstring isolation — slow negatives"},
            {name:"Calf Raise",sets:4,reps:"20",rest:"60s",tip:"High rep calves — full stretch at bottom"},
            {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"60s",tip:"Core finish"},
          ]},
          {day:"Day 3",label:"Upper B — Volume",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Upper chest — more volume, slightly less weight than Day 1"},
            {name:"Cable Row",sets:4,reps:"12",rest:"90s",tip:"Higher reps — feel the squeeze"},
            {name:"Dumbbell Shoulder Press",sets:3,reps:"12",rest:"90s",tip:"Shoulder volume"},
            {name:"Dumbbell Incline Curl",sets:3,reps:"12",rest:"60s",tip:"Bicep stretch at bottom"},
            {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"60s",tip:"Long head tricep focus"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Rear delt and rotator cuff health"},
          ]},
          {day:"Day 4",label:"Lower B — Volume",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Heavy deadlifts on the 4th day — you can handle it"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"12",rest:"90s",tip:"Quad volume after deadlifts"},
            {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"90s",tip:"Single leg strength"},
            {name:"Lying Leg Curl",sets:3,reps:"12",rest:"90s",tip:"Hamstring again — frequency is key"},
            {name:"Calf Raise",sets:4,reps:"20",rest:"60s",tip:"High rep calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core to finish"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"Adding Weight",
        note:"Same structure — add weight to all compound lifts that felt manageable in Week 1.",
        days:[
          {day:"Day 1",label:"Upper A — Strength+",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Barbell Bench Press",sets:4,reps:"6",rest:"2.5min",tip:"Add 2.5kg from Week 1"},
            {name:"Barbell Bent Over Row",sets:4,reps:"6",rest:"2.5min",tip:"Add 2.5kg"},
            {name:"Overhead Press",sets:3,reps:"8",rest:"2min",tip:"Add 2.5kg if you can"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"10",rest:"90s",tip:"Add weight or more reps"},
            {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"60s",tip:"4 sets this week"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Hold the minute"},
          ]},
          {day:"Day 2",label:"Lower A — Strength+",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Barbell Back Squat",sets:4,reps:"6",rest:"2.5min",tip:"Add 2.5kg each side"},
            {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Add 5kg"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Add 10kg on stack"},
            {name:"Lying Leg Curl",sets:3,reps:"12",rest:"90s",tip:"Add small weight"},
            {name:"Calf Raise",sets:4,reps:"20",rest:"60s",tip:"Heavier or more reps"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"2 more reps"},
          ]},
          {day:"Day 3",label:"Upper B — Volume+",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"More volume this week"},
            {name:"Cable Row",sets:4,reps:"12",rest:"90s",tip:"More weight on stack"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"90s",tip:"4 sets now"},
            {name:"Dumbbell Incline Curl",sets:3,reps:"12",rest:"60s",tip:"Heavier or controlled drop set"},
            {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"60s",tip:"Small weight increase"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Maintain health work"},
          ]},
          {day:"Day 4",label:"Lower B — Volume+",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Add 5kg from Week 1"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"12",rest:"90s",tip:"Add weight"},
            {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"90s",tip:"Heavier dumbbells"},
            {name:"Lying Leg Curl",sets:4,reps:"12",rest:"90s",tip:"4 sets this week"},
            {name:"Calf Raise",sets:4,reps:"20",rest:"60s",tip:"Heavy calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Solid core finish"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Peak Volume",
        note:"Hardest week of Month 4 — add sets where possible. Push yourself.",
        days:[
          {day:"Day 1",label:"Upper A — Heavy",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"5×5 this week — very heavy"},
            {name:"Barbell Bent Over Row",sets:5,reps:"5",rest:"2.5min",tip:"5×5 — match the press"},
            {name:"Overhead Press",sets:4,reps:"8",rest:"2min",tip:"4 sets"},
            {name:"Pull-Up",sets:4,reps:"max",rest:"90s",tip:"Max reps each set with body weight"},
            {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"60s",tip:"4 sets — shoulder volume"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"Core replacement"},
          ]},
          {day:"Day 2",label:"Lower A — Heavy",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"5×5 squats — your heaviest this month"},
            {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Heavy RDL"},
            {name:"Leg Press Machine",sets:4,reps:"12",rest:"90s",tip:"4 sets on leg press"},
            {name:"Lying Leg Curl",sets:4,reps:"12",rest:"90s",tip:"4 sets"},
            {name:"Calf Raise",sets:5,reps:"20",rest:"60s",tip:"5 sets of calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core finish"},
          ]},
          {day:"Day 3",label:"Upper B — Volume Peak",tag:"Upper",color:"#dc2626",exercises:[
            {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"5 sets on incline"},
            {name:"Cable Row",sets:5,reps:"12",rest:"90s",tip:"5 sets of rows"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"90s",tip:"4 sets"},
            {name:"Dumbbell Incline Curl",sets:4,reps:"12",rest:"60s",tip:"4 sets biceps"},
            {name:"Overhead Tricep Extension",sets:4,reps:"12",rest:"60s",tip:"4 sets triceps"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Rear delt health"},
          ]},
          {day:"Day 4",label:"Lower B — Volume Peak",tag:"Lower",color:"#ea580c",exercises:[
            {name:"Deadlift",sets:5,reps:"3",rest:"3min",tip:"Heavy triples — 5 sets"},
            {name:"Hack Squat or Leg Press",sets:5,reps:"10",rest:"90s",tip:"5 sets — legs are working hard"},
            {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"90s",tip:"4 sets per leg"},
            {name:"Lying Leg Curl",sets:4,reps:"12",rest:"90s",tip:"4 sets"},
            {name:"Calf Raise",sets:5,reps:"20",rest:"60s",tip:"5 sets calves"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"Core finish"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Deload",
        note:"Mandatory deload — 60% weight, 3 sets, focus on movement quality.",
        days:[
          {day:"Day 1",label:"Upper Deload",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Bench Press",sets:3,reps:"8",rest:"2min",tip:"60% weight"},
            {name:"Barbell Bent Over Row",sets:3,reps:"8",rest:"2min",tip:"Light and smooth"},
            {name:"Overhead Press",sets:3,reps:"8",rest:"90s",tip:"Easy pressing"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"8",rest:"90s",tip:"Light pull"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Maintain"},
          ]},
          {day:"Day 2",label:"Lower Deload",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"60% weight"},
            {name:"Romanian Deadlift",sets:3,reps:"8",rest:"90s",tip:"Feel the hamstrings"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Easy leg press"},
            {name:"Calf Raise",sets:3,reps:"20",rest:"60s",tip:"Light calves"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery"},
          ]},
          {day:"Day 3",label:"Mobility & Recovery",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold and breathe"},
            {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Full hip opener"},
            {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Activate glutes"},
            {name:"Foam Roll Quads",sets:2,reps:"60s each leg",rest:"—",tip:"Roll slowly"},
            {name:"Cat Cow Stretch",sets:3,reps:"10",rest:"—",tip:"Breathe"},
          ]},
          {day:"Day 4",label:"Upper/Lower Light",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"60% — just groove the pattern"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"8",rest:"90s",tip:"Light"},
            {name:"Dumbbell Bench Press",sets:3,reps:"10",rest:"90s",tip:"Light dumbbell press"},
            {name:"Goblet Squat",sets:3,reps:"10",rest:"90s",tip:"Back to basics — feel good squat"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core finish"},
          ]},
        ]
      },
    ]
  },
  {
    id: 5, label: "Month 5", theme: "Strength & Hypertrophy",
    description: "4-day Upper/Lower with periodized loading. Alternating heavy and volume sessions for each muscle group.",
    gradient: ["#0369a1","#0891b2"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"Periodized Loading",
        note:"Heavy session then volume session for each muscle group this week.",
        days:[
          {day:"Day 1",label:"Upper — Heavy",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Heaviest bench of the program so far — 5 sets of 3"},
            {name:"Barbell Bent Over Row",sets:5,reps:"3",rest:"3min",tip:"Match the press with heavy rows"},
            {name:"Overhead Press",sets:4,reps:"5",rest:"2.5min",tip:"Heavy vertical push"},
            {name:"Weighted Pull-Up",sets:4,reps:"5",rest:"2.5min",tip:"Add weight to a belt or hold dumbbell between feet"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Shoulder health — always"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core"},
          ]},
          {day:"Day 2",label:"Lower — Heavy",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"3",rest:"3min",tip:"Heaviest squats — 5×3"},
            {name:"Deadlift",sets:4,reps:"3",rest:"3min",tip:"Heavy and crisp"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"6",rest:"2min",tip:"Heavy after squats"},
            {name:"Lying Leg Curl",sets:3,reps:"8",rest:"90s",tip:"Heavier than before"},
            {name:"Calf Raise",sets:4,reps:"15",rest:"60s",tip:"Heavier calves"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"Core finish"},
          ]},
          {day:"Day 3",label:"Upper — Volume",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"90s",tip:"Volume upper chest — higher reps"},
            {name:"Cable Row",sets:4,reps:"15",rest:"90s",tip:"Volume rows — squeeze"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"90s",tip:"Volume shoulder work"},
            {name:"Lat Pulldown",sets:4,reps:"12",rest:"90s",tip:"Volume lat work"},
            {name:"Dumbbell Incline Curl",sets:3,reps:"15",rest:"60s",tip:"Volume biceps"},
            {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"Volume triceps"},
          ]},
          {day:"Day 4",label:"Lower — Volume",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Romanian Deadlift",sets:4,reps:"15",rest:"90s",tip:"High rep RDL — hamstring pump"},
            {name:"Leg Press Machine",sets:4,reps:"20",rest:"90s",tip:"20 rep leg press — this will hurt"},
            {name:"Bulgarian Split Squat",sets:3,reps:"12 each",rest:"90s",tip:"Volume split squats"},
            {name:"Lying Leg Curl",sets:4,reps:"15",rest:"60s",tip:"High rep hamstring isolation"},
            {name:"Calf Raise",sets:5,reps:"25",rest:"60s",tip:"Very high rep calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core finish"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"Progressive Load",
        note:"Add weight to heavy sessions. Volume sessions can stay the same or go slightly heavier.",
        days:[
          {day:"Day 1",label:"Upper — Heavy+",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Add 2.5kg from Week 1"},
            {name:"Barbell Bent Over Row",sets:5,reps:"3",rest:"3min",tip:"Add 2.5kg"},
            {name:"Overhead Press",sets:4,reps:"5",rest:"2.5min",tip:"Add 2.5kg"},
            {name:"Weighted Pull-Up",sets:4,reps:"5",rest:"2.5min",tip:"Add weight"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Health — same"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Same"},
          ]},
          {day:"Day 2",label:"Lower — Heavy+",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"3",rest:"3min",tip:"Add 2.5kg each side"},
            {name:"Deadlift",sets:4,reps:"3",rest:"3min",tip:"Add 5kg"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"6",rest:"2min",tip:"Heavier"},
            {name:"Lying Leg Curl",sets:3,reps:"8",rest:"90s",tip:"Heavier"},
            {name:"Calf Raise",sets:4,reps:"15",rest:"60s",tip:"Heavier"},
            {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"Same"},
          ]},
          {day:"Day 3",label:"Upper — Volume+",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"90s",tip:"Heavier dumbbells"},
            {name:"Cable Row",sets:4,reps:"15",rest:"90s",tip:"More weight on stack"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"90s",tip:"Heavier"},
            {name:"Lat Pulldown",sets:4,reps:"12",rest:"90s",tip:"Add weight"},
            {name:"Dumbbell Incline Curl",sets:3,reps:"15",rest:"60s",tip:"Heavier"},
            {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"Heavier"},
          ]},
          {day:"Day 4",label:"Lower — Volume+",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Romanian Deadlift",sets:4,reps:"15",rest:"90s",tip:"Heavier"},
            {name:"Leg Press Machine",sets:4,reps:"20",rest:"90s",tip:"Add weight and still hit 20"},
            {name:"Bulgarian Split Squat",sets:3,reps:"12 each",rest:"90s",tip:"Heavier"},
            {name:"Lying Leg Curl",sets:4,reps:"15",rest:"60s",tip:"Heavier"},
            {name:"Calf Raise",sets:5,reps:"25",rest:"60s",tip:"Heavier"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core finish"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Peak Week",
        note:"Best week of Month 5 — push your numbers. You've earned it.",
        days:[
          {day:"Day 1",label:"Upper — Peak Heavy",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"2",rest:"3min",tip:"Near-max doubles — test your strength"},
            {name:"Barbell Bent Over Row",sets:5,reps:"3",rest:"3min",tip:"Heavy rows"},
            {name:"Overhead Press",sets:4,reps:"3",rest:"2.5min",tip:"Heavy triples"},
            {name:"Weighted Pull-Up",sets:4,reps:"4",rest:"2.5min",tip:"Heavy pull-ups"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Health work"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core"},
          ]},
          {day:"Day 2",label:"Lower — Peak Heavy",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"2",rest:"3min",tip:"Near-max doubles"},
            {name:"Deadlift",sets:3,reps:"1",rest:"4min",tip:"Work up to a heavy single — test yourself"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"8",rest:"2min",tip:"Heavy accessory"},
            {name:"Lying Leg Curl",sets:3,reps:"8",rest:"90s",tip:"Heavier"},
            {name:"Calf Raise",sets:4,reps:"15",rest:"60s",tip:"Loaded calves"},
            {name:"Ab Wheel Rollout",sets:3,reps:"15",rest:"60s",tip:"Core strength finish"},
          ]},
          {day:"Day 3",label:"Upper — Peak Volume",tag:"Upper",color:"#0369a1",exercises:[
            {name:"Incline Dumbbell Press",sets:5,reps:"10",rest:"90s",tip:"5 sets — peak volume"},
            {name:"Cable Row",sets:5,reps:"12",rest:"90s",tip:"5 sets of rows"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"90s",tip:"Volume shoulder"},
            {name:"Lat Pulldown",sets:4,reps:"12",rest:"90s",tip:"Volume lat"},
            {name:"Dumbbell Incline Curl",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
            {name:"Overhead Tricep Extension",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          ]},
          {day:"Day 4",label:"Lower — Peak Volume",tag:"Lower",color:"#0891b2",exercises:[
            {name:"Romanian Deadlift",sets:5,reps:"12",rest:"90s",tip:"5 sets heavy RDL"},
            {name:"Leg Press Machine",sets:5,reps:"15",rest:"90s",tip:"5 sets leg press"},
            {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"90s",tip:"4 sets each leg"},
            {name:"Lying Leg Curl",sets:4,reps:"15",rest:"60s",tip:"4 sets"},
            {name:"Calf Raise",sets:5,reps:"25",rest:"60s",tip:"5 sets calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Finish strong"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Deload & Test",
        note:"Deload days 1-2, then test a 1RM on squat and bench on Day 3 (optional). Proud of where you are.",
        days:[
          {day:"Day 1",label:"Deload Upper",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"60% — recovery week"},
            {name:"Barbell Bent Over Row",sets:3,reps:"5",rest:"2min",tip:"Light and smooth"},
            {name:"Overhead Press",sets:3,reps:"8",rest:"90s",tip:"Easy"},
            {name:"Pull-Up or Lat Pulldown",sets:3,reps:"8",rest:"90s",tip:"Light"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery"},
          ]},
          {day:"Day 2",label:"Deload Lower",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"60%"},
            {name:"Romanian Deadlift",sets:3,reps:"8",rest:"90s",tip:"Light"},
            {name:"Leg Press Machine",sets:3,reps:"12",rest:"90s",tip:"Easy"},
            {name:"Calf Raise",sets:3,reps:"20",rest:"60s",tip:"Light"},
            {name:"Treadmill Walk",sets:1,reps:"15 min",rest:"—",tip:"Recovery walk"},
          ]},
          {day:"Day 3",label:"Optional 1RM Test",tag:"Strength",color:"#0369a1",exercises:[
            {name:"Barbell Back Squat",sets:1,reps:"1 max",rest:"5min",tip:"Warm up well: 60%, 75%, 85%, 90%, then attempt max. Safety spotter recommended"},
            {name:"Barbell Bench Press",sets:1,reps:"1 max",rest:"5min",tip:"Same protocol — warm up thoroughly first"},
            {name:"Deadlift",sets:1,reps:"1 max",rest:"5min",tip:"Optional 3rd test — your call"},
            {name:"Overhead Press",sets:1,reps:"1 max",rest:"5min",tip:"Test your OHP too if feeling good"},
            {name:"Plank",sets:1,reps:"max",rest:"—",tip:"How long can you hold? Note your time"},
          ]},
          {day:"Day 4",label:"Mobility & Celebration",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"You've earned this stretch"},
            {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip recovery"},
            {name:"Foam Roll Full Body",sets:1,reps:"10 min",rest:"—",tip:"Thorough foam roll — you've worked hard"},
            {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Easy activation"},
            {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"5 months done. Month 6 — final push ahead"},
          ]},
        ]
      },
    ]
  },
  {
    id: 6, label: "Month 6", theme: "Peak Performance",
    description: "The final month. 4 days of Upper/Lower with maximum intensity. Push every lift to a new personal best.",
    gradient: ["#4f46e5","#7c3aed"],
    weeks: [
      {
        id:1, label:"Week 1", theme:"Final Strength Block",
        note:"Everything you've built — this is the final block. Go heavier than ever, but keep form.",
        days:[
          {day:"Day 1",label:"Upper — Max Strength",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Heaviest bench of your life — progressive warm-up then 5 heavy triples"},
            {name:"Weighted Pull-Up",sets:5,reps:"3",rest:"3min",tip:"Maximum pull-up weight"},
            {name:"Overhead Press",sets:4,reps:"4",rest:"2.5min",tip:"Heavy OHP"},
            {name:"Barbell Bent Over Row",sets:4,reps:"4",rest:"2.5min",tip:"Heavy rows"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Shoulder health always"},
            {name:"Ab Wheel Rollout",sets:3,reps:"15",rest:"60s",tip:"Strong core finish"},
          ]},
          {day:"Day 2",label:"Lower — Max Strength",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"3",rest:"3.5min",tip:"Heaviest squats ever — 5 hard triples"},
            {name:"Deadlift",sets:4,reps:"3",rest:"3.5min",tip:"Heavy deadlifts — push every set"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"6",rest:"2min",tip:"Heavy accessory work"},
            {name:"Lying Leg Curl",sets:4,reps:"8",rest:"90s",tip:"Heavy hamstrings"},
            {name:"Calf Raise",sets:5,reps:"15",rest:"60s",tip:"Heavy loaded calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Solid core"},
          ]},
          {day:"Day 3",label:"Upper — Hypertrophy",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"Heavy volume incline"},
            {name:"Cable Row",sets:5,reps:"10",rest:"90s",tip:"Heavy cable rows"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"90s",tip:"Volume shoulder"},
            {name:"Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"Volume lat"},
            {name:"Hammer Curl",sets:3,reps:"12",rest:"60s",tip:"Brachialis and forearm — thick arms"},
            {name:"Skull Crusher",sets:3,reps:"12",rest:"60s",tip:"Tricep mass builder"},
          ]},
          {day:"Day 4",label:"Lower — Hypertrophy",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"Heavy volume RDL"},
            {name:"Leg Press Machine",sets:4,reps:"15",rest:"90s",tip:"Heavy leg press — push it"},
            {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"90s",tip:"Heavy single leg"},
            {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"High volume hamstrings"},
            {name:"Calf Raise",sets:5,reps:"20",rest:"60s",tip:"Final calf work"},
            {name:"Ab Wheel Rollout",sets:4,reps:"12",rest:"60s",tip:"Core volume finish"},
          ]},
        ]
      },
      {
        id:2, label:"Week 2", theme:"All-Time Numbers",
        note:"Set new personal bests this week. Every lift heavier than Week 1.",
        days:[
          {day:"Day 1",label:"Upper — New PBs",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Add 2.5–5kg from Week 1 — new personal best"},
            {name:"Weighted Pull-Up",sets:5,reps:"3",rest:"3min",tip:"Add more weight"},
            {name:"Overhead Press",sets:4,reps:"4",rest:"2.5min",tip:"New OHP best"},
            {name:"Barbell Bent Over Row",sets:4,reps:"4",rest:"2.5min",tip:"New row best"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Health"},
            {name:"Ab Wheel Rollout",sets:3,reps:"15",rest:"60s",tip:"Core"},
          ]},
          {day:"Day 2",label:"Lower — New PBs",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"3",rest:"3.5min",tip:"New squat record this week"},
            {name:"Deadlift",sets:4,reps:"3",rest:"3.5min",tip:"New deadlift record"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"6",rest:"2min",tip:"Heavier"},
            {name:"Lying Leg Curl",sets:4,reps:"8",rest:"90s",tip:"Heavier"},
            {name:"Calf Raise",sets:5,reps:"15",rest:"60s",tip:"Heavy calves"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core solid"},
          ]},
          {day:"Day 3",label:"Upper — Volume Push",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"Heavier than Week 1"},
            {name:"Cable Row",sets:5,reps:"10",rest:"90s",tip:"More weight"},
            {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"90s",tip:"Heavier"},
            {name:"Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"More weight"},
            {name:"Hammer Curl",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
            {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          ]},
          {day:"Day 4",label:"Lower — Volume Push",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"Heavier RDL"},
            {name:"Leg Press Machine",sets:4,reps:"15",rest:"90s",tip:"Heavier"},
            {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"90s",tip:"Heavier"},
            {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Heavier"},
            {name:"Calf Raise",sets:5,reps:"20",rest:"60s",tip:"Final volume calves"},
            {name:"Ab Wheel Rollout",sets:4,reps:"15",rest:"60s",tip:"Core volume peak"},
          ]},
        ]
      },
      {
        id:3, label:"Week 3", theme:"Final Push",
        note:"Last hard training week. Leave everything in the gym. Week 4 is the finish line.",
        days:[
          {day:"Day 1",label:"Upper — Final Push",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Barbell Bench Press",sets:5,reps:"2",rest:"3.5min",tip:"Near-max doubles — your all-time best"},
            {name:"Weighted Pull-Up",sets:5,reps:"2",rest:"3.5min",tip:"Heaviest ever pull-ups"},
            {name:"Overhead Press",sets:4,reps:"3",rest:"3min",tip:"Heavy triples"},
            {name:"Barbell Bent Over Row",sets:4,reps:"3",rest:"3min",tip:"Heavy triples row"},
            {name:"Cable Face Pull",sets:3,reps:"15",rest:"60s",tip:"Shoulder health — always"},
            {name:"Plank",sets:3,reps:"90s",rest:"60s",tip:"1.5 minutes — you can do it"},
          ]},
          {day:"Day 2",label:"Lower — Final Push",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Barbell Back Squat",sets:5,reps:"2",rest:"3.5min",tip:"Heaviest squats ever — doubles"},
            {name:"Deadlift",sets:4,reps:"2",rest:"4min",tip:"Near-max doubles — pull heavy"},
            {name:"Hack Squat or Leg Press",sets:4,reps:"6",rest:"2.5min",tip:"Heavy accessory"},
            {name:"Lying Leg Curl",sets:4,reps:"6",rest:"90s",tip:"Heavy hamstrings"},
            {name:"Calf Raise",sets:5,reps:"12",rest:"60s",tip:"Heavy loaded calves"},
            {name:"Ab Wheel Rollout",sets:4,reps:"15",rest:"60s",tip:"Core finish"},
          ]},
          {day:"Day 3",label:"Upper — Volume Peak",tag:"Upper",color:"#4f46e5",exercises:[
            {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"Final volume incline"},
            {name:"Cable Row",sets:5,reps:"10",rest:"90s",tip:"Final volume rows"},
            {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"5 sets volume shoulder"},
            {name:"Lat Pulldown",sets:4,reps:"12",rest:"90s",tip:"Volume lats"},
            {name:"Hammer Curl",sets:4,reps:"12",rest:"60s",tip:"Volume biceps"},
            {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Volume triceps"},
          ]},
          {day:"Day 4",label:"Lower — Volume Peak",tag:"Lower",color:"#7c3aed",exercises:[
            {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"Final heavy volume RDL"},
            {name:"Leg Press Machine",sets:5,reps:"15",rest:"90s",tip:"5 sets peak leg press"},
            {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"90s",tip:"Final push single leg"},
            {name:"Lying Leg Curl",sets:5,reps:"12",rest:"60s",tip:"5 sets hamstrings"},
            {name:"Calf Raise",sets:5,reps:"20",rest:"60s",tip:"Final calf volume"},
            {name:"Plank",sets:3,reps:"90s",rest:"60s",tip:"Hold the 1.5 minutes — final core"},
          ]},
        ]
      },
      {
        id:4, label:"Week 4", theme:"Final Testing",
        note:"Deload Mon-Tue. Wed/Thu: Test your 1RM on all main lifts. You've earned every kg.",
        days:[
          {day:"Day 1",label:"Final Deload",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"60% — prep for testing"},
            {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"Light — save it for the test"},
            {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"60% — groove the pattern"},
            {name:"Plank",sets:3,reps:"60s",rest:"60s",tip:"Core maintenance"},
          ]},
          {day:"Day 2",label:"Active Recovery",tag:"Recovery",color:"#6b7280",exercises:[
            {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Open your hips for the squat test"},
            {name:"Thoracic Extension",sets:3,reps:"10",rest:"—",tip:"Open your upper back for the bench test"},
            {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Prime the glutes for deadlift testing"},
            {name:"Treadmill Walk",sets:1,reps:"15 min",rest:"—",tip:"Easy blood flow — stay loose"},
          ]},
          {day:"Day 3",label:"Squat & Bench 1RM",tag:"Strength",color:"#4f46e5",exercises:[
            {name:"Barbell Back Squat",sets:1,reps:"1 max",rest:"5min",tip:"Warm up: 50%, 70%, 80%, 90%, attempt max. Always have a spotter"},
            {name:"Barbell Bench Press",sets:1,reps:"1 max",rest:"5min",tip:"Warm up thoroughly, then hit your max. Record the number"},
            {name:"Overhead Press",sets:1,reps:"1 max",rest:"4min",tip:"Press your all-time max overhead"},
          ]},
          {day:"Day 4",label:"Deadlift & Pull 1RM",tag:"Strength",color:"#7c3aed",exercises:[
            {name:"Deadlift",sets:1,reps:"1 max",rest:"5min",tip:"The final test — pull as heavy as you can. Celebrate every kg"},
            {name:"Weighted Pull-Up",sets:1,reps:"max",rest:"4min",tip:"Max weight pull-up — how much can you add?"},
            {name:"Plank",sets:1,reps:"max",rest:"—",tip:"Final plank test — how long? Compare to Month 1 (20s). 6 months of progress!"},
          ]},
        ]
      },
    ]
  },
];
