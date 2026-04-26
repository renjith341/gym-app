// Intermediate Plan — 6 months, 4-5 days/week, Upper/Lower → PPL → 5/3/1 → Peak
// Months 1-2 use the existing base data; months 3-6 are progressive builds on that.

import { month1 } from '../month1';
import { month2 } from '../month2';

const month3 = {
  id: 3, label: "Month 3", theme: "Push / Pull / Legs",
  description: "Introduce PPL split. 5 days/week with higher training frequency per muscle group.",
  gradient: ["#7c3aed","#db2777"],
  weeks: [
    {
      id:1, label:"Week 1", theme:"PPL Introduction",
      note:"Push/Pull/Legs rotated over 5 days. Aim to hit every muscle group 1.5x per week. Log everything.",
      days:[
        {day:"Day 1",label:"Push",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Foundation push — heavier than Month 2",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Upper chest emphasis",muscle:"Upper Chest"},
          {name:"Overhead Press",sets:3,reps:"10",rest:"75s",tip:"Vertical push — keep core tight",muscle:"Shoulders"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder width builder",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Elbows pinned to sides",muscle:"Triceps"},
          {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"45s",tip:"Long head stretch",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:4,reps:"6",rest:"90s",tip:"Add weight — vertical pull focus",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Horizontal pull — row to belly button",muscle:"Back"},
          {name:"Chest Supported Row",sets:3,reps:"12",rest:"60s",tip:"No cheat — incline bench, dumbbells",muscle:"Back"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:"Shoulder health — always",muscle:"Rear Delts"},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep stretch at bottom",muscle:"Biceps"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"Brachialis thickness",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Squat heavy — leg day centerpiece",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Hamstring stretch at bottom",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"75s",tip:"Quad isolation after squats",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:3,reps:"12",rest:"60s",tip:"Slow 4s eccentric",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"Heavy, full range",muscle:"Calves"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Plank + side plank + hollow hold",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Upper chest — alternate with flat bench",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"75s",tip:"Volume chest — high rep",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Full stretch, squeeze at centre",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"60s",tip:"Volume shoulder work",muscle:"Shoulders"},
          {name:"Lateral Raise",sets:3,reps:"20",rest:"45s",tip:"High rep — lighter, feel the burn",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:3,reps:"12",rest:"45s",tip:"Heavy tricep — control descent",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Light Legs",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"75s",tip:"Full stretch at top, pull to chest",muscle:"Lats"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace on bench, elbow to hip",muscle:"Back"},
          {name:"Cable Row",sets:3,reps:"15",rest:"60s",tip:"High rep volume rows",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:3,reps:"10",rest:"45s",tip:"Heavier curl — strength day",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Glute focus — heavy",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Unilateral leg finisher",muscle:"Quads & Glutes"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Load Progression",
      note:"Add 2.5–5kg on all compound lifts from Week 1. Same structure.",
      days:[
        {day:"Day 1",label:"Push",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg from Week 1",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Heavier dumbbells",muscle:"Upper Chest"},
          {name:"Overhead Press",sets:3,reps:"10",rest:"75s",tip:"Add 2.5kg",muscle:"Shoulders"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Same or heavier",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"45s",tip:"4 sets this week",muscle:"Triceps"},
          {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"45s",tip:"Heavier",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:4,reps:"6",rest:"90s",tip:"Add 2.5kg",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg",muscle:"Back"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"4 sets this week",muscle:"Back"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:"Same — health work",muscle:"Rear Delts"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"12",rest:"45s",tip:"4 sets",muscle:"Biceps"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"Heavier",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg each side",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Add 5kg",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"4 sets",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"4 sets",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"Heavier",muscle:"Calves"},
          {name:"Ab Circuit",sets:3,reps:"35s",rest:"30s",tip:"5 more seconds",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Add 2.5kg",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press",sets:4,reps:"12",rest:"75s",tip:"4 sets",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Heavier or more reps",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"60s",tip:"Heavier",muscle:"Shoulders"},
          {name:"Lateral Raise",sets:3,reps:"20",rest:"45s",tip:"Same — high rep",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"45s",tip:"4 sets",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Light Legs",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"75s",tip:"Add weight",muscle:"Lats"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"12 each",rest:"60s",tip:"4 sets",muscle:"Back"},
          {name:"Cable Row",sets:3,reps:"15",rest:"60s",tip:"Add weight to stack",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:3,reps:"10",rest:"45s",tip:"Heavier bar",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Heavier barbell",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Heavier dumbbells",muscle:"Quads & Glutes"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Volume Peak",
      note:"Highest volume of the month. Push the reps and sets on accessories.",
      days:[
        {day:"Day 1",label:"Push — Volume",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"8",rest:"90s",tip:"5 sets this week — push hard",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"75s",tip:"Higher reps — pump",muscle:"Upper Chest"},
          {name:"Overhead Press",sets:4,reps:"10",rest:"75s",tip:"4 sets",muscle:"Shoulders"},
          {name:"Dumbbell Lateral Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets — shoulder volume",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"45s",tip:"4 sets",muscle:"Triceps"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"45s",tip:"Higher reps",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull — Volume",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"90s",tip:"5 sets — heavy",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"8",rest:"90s",tip:"5 sets",muscle:"Back"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"4 sets",muscle:"Back"},
          {name:"Cable Face Pull",sets:4,reps:"20",rest:"45s",tip:"More reps",muscle:"Rear Delts"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"15",rest:"45s",tip:"Volume biceps",muscle:"Biceps"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"4 sets",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs — Volume",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"8",rest:"2min",tip:"5 sets — hardest squat session yet",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:4,reps:"12",rest:"90s",tip:"More reps",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:4,reps:"15",rest:"75s",tip:"Higher reps — pump",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"15",rest:"60s",tip:"Volume hamstrings",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:6,reps:"15",rest:"45s",tip:"6 sets — calves need it",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 full rounds",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B — Volume",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:5,reps:"8",rest:"90s",tip:"5 sets incline",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press",sets:4,reps:"15",rest:"75s",tip:"High rep pump",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:4,reps:"15",rest:"60s",tip:"4 sets — squeeze",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"12",rest:"60s",tip:"5 sets shoulder",muscle:"Shoulders"},
          {name:"Lateral Raise Drop Set",sets:3,reps:"15+15",rest:"60s",tip:"Do 15 reps, immediately drop 2 dumbbells, do 15 more",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"45s",tip:"Heavy tricep volume",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Legs — Volume",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:5,reps:"10",rest:"75s",tip:"5 sets — lat volume",muscle:"Lats"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"15 each",rest:"60s",tip:"Higher reps",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"4 sets heavy",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:5,reps:"12",rest:"60s",tip:"5 sets heavy glutes",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"75s",tip:"4 sets per leg",muscle:"Quads & Glutes"},
          {name:"Standing Calf Raise",sets:4,reps:"20",rest:"45s",tip:"High rep finisher",muscle:"Calves"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Deload",
      note:"60% weight, 3 sets. Full recovery. Month 4 is even harder.",
      days:[
        {day:"Day 1",label:"Push Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"8",rest:"90s",tip:"60% — smooth",muscle:"Chest"},
          {name:"Overhead Press",sets:3,reps:"8",rest:"75s",tip:"Light",muscle:"Shoulders"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Light",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Pump only",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight only",muscle:"Lats & Back"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light and smooth",muscle:"Back"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health — always",muscle:"Rear Delts"},
          {name:"Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Light",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"12",rest:"90s",tip:"Back to basics — light deload squat",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Light",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"75s",tip:"Easy",muscle:"Quads"},
          {name:"Calf Raise",sets:3,reps:"15",rest:"45s",tip:"Light",muscle:"Calves"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery",muscle:"Cardio"},
        ]},
        {day:"Day 4",label:"Mobility",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold deep",muscle:"Mobility"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener",muscle:"Mobility"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough foam rolling",muscle:"Recovery"},
          {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Glute activation",muscle:"Glutes"},
        ]},
      ]
    },
  ]
};

const month4 = {
  id: 4, label: "Month 4", theme: "Advanced PPL",
  description: "PPL with supersets, drop sets, and intensity techniques. 5 days/week.",
  gradient: ["#dc2626","#ea580c"],
  weeks: [
    {
      id:1, label:"Week 1", theme:"Intensity Techniques",
      note:"Introduce supersets (SS) and drop sets (DS). Supersets = do both exercises back to back with 10s rest between.",
      days:[
        {day:"Day 1",label:"Push — Supersets",tag:"Push",color:"#dc2626",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"Heavy strength set before any supersets",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"10s SS",tip:"SS with lateral raises — no rest between these two",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"60s",tip:"SS pair with incline press — rest after this",muscle:"Shoulders"},
          {name:"Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Standard sets after supersets",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"10s SS",tip:"SS with overhead extension",muscle:"Triceps"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"SS finish — arms will be pumped",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull — Supersets",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"2.5min",tip:"Heavy strength pull",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"2min",tip:"Strength row — standard",muscle:"Back"},
          {name:"Lat Pulldown",sets:4,reps:"12",rest:"10s SS",tip:"SS with cable row",muscle:"Lats"},
          {name:"Cable Row",sets:4,reps:"15",rest:"60s",tip:"SS pair — back pump",muscle:"Back"},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"10s SS",tip:"SS with hammer curl",muscle:"Biceps"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"60s",tip:"SS finish — arms pumped",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs — Heavy",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Heavy squats — 5x5 this month",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Heavy hinge",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:4,reps:"12",rest:"90s",tip:"High volume quad",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"75s",tip:"4s eccentric",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"12",rest:"45s",tip:"Heavy calves",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 rounds",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B — Drop Sets",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"2min",tip:"Standard sets",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press Drop Set",sets:3,reps:"10+8+6",rest:"2min",tip:"Start heavy, drop weight twice without rest. 3 sets of this drop set",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Standard — full stretch",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"75s",tip:"Seated, heavy",muscle:"Shoulders"},
          {name:"Lateral Raise Drop Set",sets:3,reps:"15+12+10",rest:"60s",tip:"Drop weight twice — finish with light, controlled",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Heavy tricep mass",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Leg Accessory",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:3,reps:"5",rest:"2.5min",tip:"Heavy conventional deadlift — not RDL",muscle:"Back & Glutes"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"Incline bench row — no cheat",muscle:"Back"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace hard, pull to hip",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"Strength curl",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:4,reps:"10",rest:"60s",tip:"Heavy glutes",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Heavy single leg",muscle:"Quads & Glutes"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Intensity Increase",
      note:"Add 2.5–5kg on compound lifts. Push the intensity techniques harder this week.",
      days:[
        {day:"Day 1",label:"Push — SS Heavy",tag:"Push",color:"#dc2626",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg",muscle:"Chest"},
          {name:"Incline Dumbbell Press SS Lateral",sets:4,reps:"12+15",rest:"60s",tip:"Superset — harder weight on both",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Heavier",muscle:"Shoulders"},
          {name:"Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg",muscle:"Shoulders"},
          {name:"Tricep SS Overhead",sets:3,reps:"15+15",rest:"60s",tip:"Superset both tricep movements",muscle:"Triceps"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"Paired",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull — SS Heavy",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg",muscle:"Back"},
          {name:"Lat Pulldown SS Row",sets:4,reps:"12+15",rest:"60s",tip:"Superset both — back pump",muscle:"Lats & Back"},
          {name:"Cable Row",sets:4,reps:"15",rest:"60s",tip:"Paired",muscle:"Back"},
          {name:"Curl SS Hammer",sets:3,reps:"12+12",rest:"60s",tip:"Superset both curl variations",muscle:"Biceps"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"60s",tip:"Paired",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs — Heavy+",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg each side",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Heavier",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:5,reps:"12",rest:"90s",tip:"5 sets",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"75s",tip:"Heavier",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"12",rest:"45s",tip:"Heavier",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"35s",rest:"30s",tip:"5 more seconds",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B — DS Heavy",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"2min",tip:"Add 2.5kg",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press Drop Set",sets:4,reps:"10+8+6",rest:"2min",tip:"4 rounds of the drop set",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:4,reps:"15",rest:"60s",tip:"4 sets — heavier",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"75s",tip:"Heavier",muscle:"Shoulders"},
          {name:"Lateral Raise Drop Set",sets:4,reps:"15+12+10",rest:"60s",tip:"4 rounds of DS",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Add weight",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Legs",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Add 5kg",muscle:"Back & Glutes"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"Heavier",muscle:"Back"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"12 each",rest:"60s",tip:"Heavier",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"Add weight",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:4,reps:"10",rest:"60s",tip:"Add weight",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"75s",tip:"4 sets",muscle:"Quads & Glutes"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Peak Intensity",
      note:"Hardest week. Full use of supersets, drop sets, and max volume.",
      days:[
        {day:"Day 1",label:"Push — Max",tag:"Push",color:"#dc2626",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Near-max triples — heaviest bench this month",muscle:"Chest"},
          {name:"Incline Dumbbell Press SS Lateral",sets:5,reps:"12+15",rest:"60s",tip:"5 rounds superset",muscle:"Upper Chest"},
          {name:"Overhead Press",sets:4,reps:"6",rest:"90s",tip:"Heavy 6 reps",muscle:"Shoulders"},
          {name:"Cable Chest Fly",sets:3,reps:"20",rest:"60s",tip:"High rep pump — chest finish",muscle:"Chest"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"10s SS",tip:"SS",muscle:"Triceps"},
          {name:"Overhead Tricep Extension Drop Set",sets:3,reps:"12+10+8",rest:"60s",tip:"DS tricep finish",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull — Max",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"3",rest:"3min",tip:"Heaviest weighted pull-ups",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"5",rest:"2.5min",tip:"5x5 heavy row",muscle:"Back"},
          {name:"Lat Pulldown SS Row",sets:5,reps:"12+15",rest:"60s",tip:"5 rounds superset",muscle:"Lats & Back"},
          {name:"Cable Face Pull",sets:4,reps:"20",rest:"45s",tip:"High rep — shoulder health",muscle:"Rear Delts"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"12",rest:"45s",tip:"Volume bicep",muscle:"Biceps"},
          {name:"Hammer Curl Drop Set",sets:3,reps:"12+10+8",rest:"60s",tip:"DS hammer curl finish",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs — Max",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Heaviest squats this month",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"8",rest:"2min",tip:"5 sets RDL",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:5,reps:"15",rest:"90s",tip:"5 sets high rep",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:5,reps:"12",rest:"75s",tip:"5 sets hamstrings",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:6,reps:"15",rest:"45s",tip:"6 sets calves",muscle:"Calves"},
          {name:"Ab Circuit",sets:5,reps:"30s",rest:"30s",tip:"5 rounds",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Push B — Max",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"5 sets heavy incline",muscle:"Upper Chest"},
          {name:"Dumbbell Bench Press Drop Set",sets:5,reps:"10+8+6",rest:"2min",tip:"5 rounds DS",muscle:"Chest"},
          {name:"Cable Chest Fly",sets:4,reps:"20",rest:"60s",tip:"High rep pump",muscle:"Chest"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"75s",tip:"5 sets shoulder",muscle:"Shoulders"},
          {name:"Lateral Raise Drop Set",sets:5,reps:"15+12+10",rest:"60s",tip:"5 rounds DS laterals",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:5,reps:"10",rest:"60s",tip:"5 sets tricep mass",muscle:"Triceps"},
        ]},
        {day:"Day 5",label:"Pull B + Legs — Max",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:4,reps:"3",rest:"3min",tip:"Heavy triples — near max",muscle:"Back & Glutes"},
          {name:"Chest Supported Row",sets:5,reps:"12",rest:"60s",tip:"5 sets",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:4,reps:"8",rest:"45s",tip:"Heavy 8 reps",muscle:"Biceps"},
          {name:"Barbell Hip Thrust",sets:5,reps:"10",rest:"60s",tip:"5 sets heavy glutes",muscle:"Glutes"},
          {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"75s",tip:"4 sets each leg",muscle:"Quads & Glutes"},
          {name:"Standing Calf Raise",sets:4,reps:"20",rest:"45s",tip:"High rep finisher",muscle:"Calves"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Deload",
      note:"No supersets, no drop sets this week. 60%, 3 sets. Pure recovery.",
      days:[
        {day:"Day 1",label:"Push Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"60%",muscle:"Chest"},
          {name:"Overhead Press",sets:3,reps:"8",rest:"90s",tip:"Light",muscle:"Shoulders"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Pump only",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Light",muscle:"Triceps"},
        ]},
        {day:"Day 2",label:"Pull Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight",muscle:"Lats & Back"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light",muscle:"Back"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
          {name:"Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Light",muscle:"Biceps"},
        ]},
        {day:"Day 3",label:"Legs Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"12",rest:"90s",tip:"Light squat — just move",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Light",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"75s",tip:"Easy",muscle:"Quads"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery",muscle:"Cardio"},
        ]},
        {day:"Day 4",label:"Mobility",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold long",muscle:"Mobility"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener",muscle:"Mobility"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough",muscle:"Recovery"},
          {name:"Cat Cow Stretch",sets:3,reps:"10",rest:"—",tip:"Breathe",muscle:"Mobility"},
        ]},
      ]
    },
  ]
};

const month5 = {
  id: 5, label: "Month 5", theme: "5/3/1 Strength",
  description: "Wendler 5/3/1 protocol for main lifts + hypertrophy accessories. 4 days/week.",
  gradient: ["#0369a1","#0891b2"],
  weeks: [
    {
      id:1, label:"Week 1 (5s)", theme:"5/3/1 Wave — 5s Week",
      note:"5/3/1 main lifts: Week 1 = 65%, 75%, 85% × 5+. The last set is AMRAP (as many reps as possible). Log your reps.",
      days:[
        {day:"Day 1",label:"Squat Day",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/5/5+",rest:"3min",tip:"Set 1: 65% TM. Set 2: 75% TM. Set 3: 85% TM × AMRAP. Training Max (TM) = 90% of your actual max",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB accessory — 5 sets × 10 at 50% of squat TM",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory hypertrophy",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Hamstring accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core always",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench Day",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/5/5+",rest:"3min",tip:"65%, 75%, 85% × AMRAP — push the last set",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10 at 50% bench TM",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Accessory volume",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder health",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Accessory tricep",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Non-negotiable health work",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift Day",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"65%, 75%, 85% × AMRAP. Pull every rep as fast as possible",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB accessory — 5×10 light",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Quad accessory",muscle:"Quads"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Leg builder",muscle:"Quads"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press Day",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/5/5+",rest:"3min",tip:"65%, 75%, 85% × AMRAP — push the OHP hard",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10 volume pressing",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Vertical pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row — 5×10",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Accessory bicep",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Shoulder health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2 (3s)", theme:"5/3/1 Wave — 3s Week",
      note:"Week 2: 70%, 80%, 90% × 3+. Heavier loads, fewer reps. Last set is AMRAP again — push it.",
      days:[
        {day:"Day 1",label:"Squat Day — 3s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% TM. Last set AMRAP — hit as many as you can with good form",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — same 50% weight",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench Day — 3s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% × AMRAP — heavy",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — same weight",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Volume",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Tricep",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift Day — 3s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"3/3/3+",rest:"4min",tip:"70%, 80%, 90% × AMRAP. Pull hard",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Quads"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Quad",muscle:"Quads"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press Day — 3s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% × AMRAP",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3 (1s)", theme:"5/3/1 Wave — 1s Week",
      note:"Week 3: 75%, 85%, 95% × 1+. The 1s week. Last set at 95% — push for as many as you can.",
      days:[
        {day:"Day 1",label:"Squat Day — 1s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% TM. The 95% set is your peak — AMRAP",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — same",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench Day — 1s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% × AMRAP. Record your reps",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Chest"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Volume",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder",muscle:"Shoulders"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Tricep",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift Day — 1s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"5/3/1+",rest:"5min",tip:"75%, 85%, 95% × AMRAP. Pull heavy — trust your training",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory",muscle:"Quads"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Quad",muscle:"Quads"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press Day — 1s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% × AMRAP — overhead strength test",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row",muscle:"Back"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"5/3/1 Deload + Bump TM",
      note:"Wendler deload: 40%, 50%, 60% × 5. Then add 2.5kg to upper TM, 5kg to lower TM for next cycle.",
      days:[
        {day:"Day 1",label:"Squat + Bench — Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60% — very light. Just move the bar",muscle:"Quads & Glutes"},
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60%",muscle:"Chest"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Light",muscle:"Shoulders"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 2",label:"Deadlift + Press — Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Deadlift",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60% — easy pulls",muscle:"Back & Glutes"},
          {name:"Overhead Press",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60%",muscle:"Shoulders"},
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight",muscle:"Lats & Back"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Light core",muscle:"Core"},
        ]},
        {day:"Day 3",label:"Mobility & Active Recovery",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Open hips",muscle:"Mobility"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip external rotation",muscle:"Mobility"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough recovery",muscle:"Recovery"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Easy cardio",muscle:"Cardio"},
        ]},
        {day:"Day 4",label:"Light Full Body",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"Light full body check-in",muscle:"Quads & Glutes"},
          {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"60s",tip:"Light",muscle:"Chest"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light",muscle:"Back"},
          {name:"Calf Raise",sets:3,reps:"20",rest:"45s",tip:"Light",muscle:"Calves"},
        ]},
      ]
    },
  ]
};

const month6 = {
  id: 6, label: "Month 6", theme: "Peak & PR",
  description: "Final month. Second 5/3/1 cycle with bumped Training Maxes. End with personal record testing.",
  gradient: ["#4f46e5","#7c3aed"],
  weeks: [
    {
      id:1, label:"Week 1 (5s)", theme:"5/3/1 Cycle 2 — 5s",
      note:"Same structure as Month 5 Week 1, but with TM increased by 2.5kg (upper) or 5kg (lower). You are stronger.",
      days:[
        {day:"Day 1",label:"Squat 5s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New higher TM. 65/75/85% — push the AMRAP hard",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 rounds",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench 5s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New TM — 65/75/85%",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10",muscle:"Chest"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Accessory",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep mass",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift 5s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"5/5/5+",rest:"4min",tip:"New TM — 65/75/85% — push AMRAP",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Volume quad",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press 5s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New TM — press heavy",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row",muscle:"Back"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2 (3s)", theme:"5/3/1 Cycle 2 — 3s",
      note:"70/80/90% of the new higher TM. You should be hitting bigger numbers than Month 5.",
      days:[
        {day:"Day 1",label:"Squat 3s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% new TM — push AMRAP",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench 3s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% — push hard",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Chest"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Volume",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift 3s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"3/3/3+",rest:"4.5min",tip:"70/80/90% — pull heavy",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press 3s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% — strong OHP",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row",muscle:"Back"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3 (1s)", theme:"5/3/1 Cycle 2 — Peak",
      note:"75/85/95% of the new higher TM. Your 95% set is heavier than ever. AMRAP — leave nothing.",
      days:[
        {day:"Day 1",label:"Squat 1s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% new TM — AMRAP the 95% set. This is a new PR zone",muscle:"Quads & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 2",label:"Bench 1s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% — this set is a PR. Log every rep",muscle:"Chest"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Chest"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Volume",muscle:"Upper Chest"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder",muscle:"Shoulders"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep",muscle:"Triceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
        {day:"Day 3",label:"Deadlift 1s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"5/3/1+",rest:"5min",tip:"75/85/95% — pull your all-time best. Record the reps",muscle:"Back & Glutes"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Hamstrings"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Accessory",muscle:"Quads"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory",muscle:"Hamstrings"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets",muscle:"Calves"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core",muscle:"Core"},
        ]},
        {day:"Day 4",label:"Press 1s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% — OHP PR. You're stronger than Month 1 Week 1",muscle:"Shoulders"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB",muscle:"Shoulders"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory",muscle:"Lats & Back"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row",muscle:"Back"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume",muscle:"Biceps"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health",muscle:"Rear Delts"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"True 1RM Testing",
      note:"Deload first half. Then attempt true 1RMs on all 4 main lifts. 6 months of work on display.",
      days:[
        {day:"Day 1",label:"Final Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"40/50/60% — prime the CNS",muscle:"Quads & Glutes"},
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"40/50/60%",muscle:"Chest"},
          {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"40/50/60%",muscle:"Back & Glutes"},
          {name:"Overhead Press",sets:3,reps:"5",rest:"2min",tip:"40/50/60%",muscle:"Shoulders"},
        ]},
        {day:"Day 2",label:"Active Recovery",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Open everything — big test ahead",muscle:"Mobility"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener",muscle:"Mobility"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Prime your muscles",muscle:"Recovery"},
          {name:"Treadmill Walk",sets:1,reps:"15 min",rest:"—",tip:"Easy blood flow",muscle:"Cardio"},
        ]},
        {day:"Day 3",label:"Squat + Bench 1RM",tag:"Strength",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:1,reps:"1 max",rest:"6min",tip:"Work up: 60%, 75%, 85%, 92%, 97%, attempt 100%+ (new PR). Spotter required. This is your true max",muscle:"Quads & Glutes"},
          {name:"Barbell Bench Press",sets:1,reps:"1 max",rest:"6min",tip:"Same protocol — this is your 6-month bench PR",muscle:"Chest"},
          {name:"Overhead Press",sets:1,reps:"1 max",rest:"5min",tip:"OHP 1RM — push overhead your all-time best",muscle:"Shoulders"},
        ]},
        {day:"Day 4",label:"Deadlift + Pull 1RM",tag:"Strength",color:"#7c3aed",exercises:[
          {name:"Deadlift",sets:1,reps:"1 max",rest:"8min",tip:"Your strongest pull ever. 6 months of practice. Trust the process and pull",muscle:"Back & Glutes"},
          {name:"Weighted Pull-Up",sets:1,reps:"max",rest:"5min",tip:"Max weight pull-up — how far have you come?",muscle:"Lats & Back"},
          {name:"Plank",sets:1,reps:"max",rest:"—",tip:"Final plank. Record your time. Compare to Month 1. The journey is the destination.",muscle:"Core"},
        ]},
      ]
    },
  ]
};

export const intermediatePlan = [month1, month2, month3, month4, month5, month6];
