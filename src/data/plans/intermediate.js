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
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Foundation push — heavier than Month 2"},
          {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Upper chest emphasis"},
          {name:"Overhead Press",sets:3,reps:"10",rest:"75s",tip:"Vertical push — keep core tight"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder width builder"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Elbows pinned to sides"},
          {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"45s",tip:"Long head stretch"},
        ]},
        {day:"Day 2",label:"Pull",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:4,reps:"6",rest:"90s",tip:"Add weight — vertical pull focus"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Horizontal pull — row to belly button"},
          {name:"Chest Supported Row",sets:3,reps:"12",rest:"60s",tip:"No cheat — incline bench, dumbbells"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:"Shoulder health — always"},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep stretch at bottom"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"Brachialis thickness"},
        ]},
        {day:"Day 3",label:"Legs",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Squat heavy — leg day centerpiece"},
          {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Hamstring stretch at bottom"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"75s",tip:"Quad isolation after squats"},
          {name:"Lying Leg Curl",sets:3,reps:"12",rest:"60s",tip:"Slow 4s eccentric"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"Heavy, full range"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Plank + side plank + hollow hold"},
        ]},
        {day:"Day 4",label:"Push B",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Upper chest — alternate with flat bench"},
          {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"75s",tip:"Volume chest — high rep"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Full stretch, squeeze at centre"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"60s",tip:"Volume shoulder work"},
          {name:"Lateral Raise",sets:3,reps:"20",rest:"45s",tip:"High rep — lighter, feel the burn"},
          {name:"Skull Crusher",sets:3,reps:"12",rest:"45s",tip:"Heavy tricep — control descent"},
        ]},
        {day:"Day 5",label:"Pull B + Light Legs",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"75s",tip:"Full stretch at top, pull to chest"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace on bench, elbow to hip"},
          {name:"Cable Row",sets:3,reps:"15",rest:"60s",tip:"High rep volume rows"},
          {name:"Barbell Bicep Curl",sets:3,reps:"10",rest:"45s",tip:"Heavier curl — strength day"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Glute focus — heavy"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Unilateral leg finisher"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Load Progression",
      note:"Add 2.5–5kg on all compound lifts from Week 1. Same structure.",
      days:[
        {day:"Day 1",label:"Push",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg from Week 1"},
          {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Heavier dumbbells"},
          {name:"Overhead Press",sets:3,reps:"10",rest:"75s",tip:"Add 2.5kg"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Same or heavier"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"45s",tip:"4 sets this week"},
          {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"45s",tip:"Heavier"},
        ]},
        {day:"Day 2",label:"Pull",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:4,reps:"6",rest:"90s",tip:"Add 2.5kg"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"4 sets this week"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:"Same — health work"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"12",rest:"45s",tip:"4 sets"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"Heavier"},
        ]},
        {day:"Day 3",label:"Legs",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg each side"},
          {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Add 5kg"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"4 sets"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"Heavier"},
          {name:"Ab Circuit",sets:3,reps:"35s",rest:"30s",tip:"5 more seconds"},
        ]},
        {day:"Day 4",label:"Push B",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"90s",tip:"Add 2.5kg"},
          {name:"Dumbbell Bench Press",sets:4,reps:"12",rest:"75s",tip:"4 sets"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Heavier or more reps"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"12",rest:"60s",tip:"Heavier"},
          {name:"Lateral Raise",sets:3,reps:"20",rest:"45s",tip:"Same — high rep"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"45s",tip:"4 sets"},
        ]},
        {day:"Day 5",label:"Pull B + Light Legs",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"75s",tip:"Add weight"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"12 each",rest:"60s",tip:"4 sets"},
          {name:"Cable Row",sets:3,reps:"15",rest:"60s",tip:"Add weight to stack"},
          {name:"Barbell Bicep Curl",sets:3,reps:"10",rest:"45s",tip:"Heavier bar"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Heavier barbell"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Heavier dumbbells"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Volume Peak",
      note:"Highest volume of the month. Push the reps and sets on accessories.",
      days:[
        {day:"Day 1",label:"Push — Volume",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"8",rest:"90s",tip:"5 sets this week — push hard"},
          {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"75s",tip:"Higher reps — pump"},
          {name:"Overhead Press",sets:4,reps:"10",rest:"75s",tip:"4 sets"},
          {name:"Dumbbell Lateral Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets — shoulder volume"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"45s",tip:"4 sets"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"45s",tip:"Higher reps"},
        ]},
        {day:"Day 2",label:"Pull — Volume",tag:"Pull",color:"#db2777",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"90s",tip:"5 sets — heavy"},
          {name:"Barbell Row",sets:5,reps:"8",rest:"90s",tip:"5 sets"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          {name:"Cable Face Pull",sets:4,reps:"20",rest:"45s",tip:"More reps"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"15",rest:"45s",tip:"Volume biceps"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"4 sets"},
        ]},
        {day:"Day 3",label:"Legs — Volume",tag:"Legs",color:"#dc2626",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"8",rest:"2min",tip:"5 sets — hardest squat session yet"},
          {name:"Romanian Deadlift",sets:4,reps:"12",rest:"90s",tip:"More reps"},
          {name:"Hack Squat Machine",sets:4,reps:"15",rest:"75s",tip:"Higher reps — pump"},
          {name:"Lying Leg Curl",sets:4,reps:"15",rest:"60s",tip:"Volume hamstrings"},
          {name:"Calf Raise",sets:6,reps:"15",rest:"45s",tip:"6 sets — calves need it"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 full rounds"},
        ]},
        {day:"Day 4",label:"Push B — Volume",tag:"Push",color:"#7c3aed",exercises:[
          {name:"Incline Barbell Press",sets:5,reps:"8",rest:"90s",tip:"5 sets incline"},
          {name:"Dumbbell Bench Press",sets:4,reps:"15",rest:"75s",tip:"High rep pump"},
          {name:"Cable Chest Fly",sets:4,reps:"15",rest:"60s",tip:"4 sets — squeeze"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"12",rest:"60s",tip:"5 sets shoulder"},
          {name:"Lateral Raise Drop Set",sets:3,reps:"15+15",rest:"60s",tip:"Do 15 reps, immediately drop 2 dumbbells, do 15 more"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"45s",tip:"Heavy tricep volume"},
        ]},
        {day:"Day 5",label:"Pull B + Legs — Volume",tag:"Pull",color:"#db2777",exercises:[
          {name:"Lat Pulldown",sets:5,reps:"10",rest:"75s",tip:"5 sets — lat volume"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"15 each",rest:"60s",tip:"Higher reps"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"4 sets heavy"},
          {name:"Barbell Hip Thrust",sets:5,reps:"12",rest:"60s",tip:"5 sets heavy glutes"},
          {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"75s",tip:"4 sets per leg"},
          {name:"Standing Calf Raise",sets:4,reps:"20",rest:"45s",tip:"High rep finisher"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Deload",
      note:"60% weight, 3 sets. Full recovery. Month 4 is even harder.",
      days:[
        {day:"Day 1",label:"Push Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"8",rest:"90s",tip:"60% — smooth"},
          {name:"Overhead Press",sets:3,reps:"8",rest:"75s",tip:"Light"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Light"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Pump only"},
        ]},
        {day:"Day 2",label:"Pull Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight only"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light and smooth"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health — always"},
          {name:"Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Light"},
        ]},
        {day:"Day 3",label:"Legs Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"12",rest:"90s",tip:"Back to basics — light deload squat"},
          {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Light"},
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"75s",tip:"Easy"},
          {name:"Calf Raise",sets:3,reps:"15",rest:"45s",tip:"Light"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery"},
        ]},
        {day:"Day 4",label:"Mobility",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold deep"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough foam rolling"},
          {name:"Glute Bridge",sets:3,reps:"20",rest:"60s",tip:"Glute activation"},
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
          {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"Heavy strength set before any supersets"},
          {name:"Incline Dumbbell Press",sets:4,reps:"12",rest:"10s SS",tip:"SS with lateral raises — no rest between these two"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"60s",tip:"SS pair with incline press — rest after this"},
          {name:"Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Standard sets after supersets"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"10s SS",tip:"SS with overhead extension"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"SS finish — arms will be pumped"},
        ]},
        {day:"Day 2",label:"Pull — Supersets",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"2.5min",tip:"Heavy strength pull"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"2min",tip:"Strength row — standard"},
          {name:"Lat Pulldown",sets:4,reps:"12",rest:"10s SS",tip:"SS with cable row"},
          {name:"Cable Row",sets:4,reps:"15",rest:"60s",tip:"SS pair — back pump"},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"10s SS",tip:"SS with hammer curl"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"60s",tip:"SS finish — arms pumped"},
        ]},
        {day:"Day 3",label:"Legs — Heavy",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Heavy squats — 5x5 this month"},
          {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Heavy hinge"},
          {name:"Leg Press Machine",sets:4,reps:"12",rest:"90s",tip:"High volume quad"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"75s",tip:"4s eccentric"},
          {name:"Calf Raise",sets:5,reps:"12",rest:"45s",tip:"Heavy calves"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 rounds"},
        ]},
        {day:"Day 4",label:"Push B — Drop Sets",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"2min",tip:"Standard sets"},
          {name:"Dumbbell Bench Press Drop Set",sets:3,reps:"10+8+6",rest:"2min",tip:"Start heavy, drop weight twice without rest. 3 sets of this drop set"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Standard — full stretch"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"75s",tip:"Seated, heavy"},
          {name:"Lateral Raise Drop Set",sets:3,reps:"15+12+10",rest:"60s",tip:"Drop weight twice — finish with light, controlled"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Heavy tricep mass"},
        ]},
        {day:"Day 5",label:"Pull B + Leg Accessory",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:3,reps:"5",rest:"2.5min",tip:"Heavy conventional deadlift — not RDL"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"Incline bench row — no cheat"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace hard, pull to hip"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"Strength curl"},
          {name:"Barbell Hip Thrust",sets:4,reps:"10",rest:"60s",tip:"Heavy glutes"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Heavy single leg"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Intensity Increase",
      note:"Add 2.5–5kg on compound lifts. Push the intensity techniques harder this week.",
      days:[
        {day:"Day 1",label:"Push — SS Heavy",tag:"Push",color:"#dc2626",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg"},
          {name:"Incline Dumbbell Press SS Lateral",sets:4,reps:"12+15",rest:"60s",tip:"Superset — harder weight on both"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Heavier"},
          {name:"Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg"},
          {name:"Tricep SS Overhead",sets:3,reps:"15+15",rest:"60s",tip:"Superset both tricep movements"},
          {name:"Overhead Tricep Extension",sets:3,reps:"15",rest:"60s",tip:"Paired"},
        ]},
        {day:"Day 2",label:"Pull — SS Heavy",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"2min",tip:"Add 2.5kg"},
          {name:"Lat Pulldown SS Row",sets:4,reps:"12+15",rest:"60s",tip:"Superset both — back pump"},
          {name:"Cable Row",sets:4,reps:"15",rest:"60s",tip:"Paired"},
          {name:"Curl SS Hammer",sets:3,reps:"12+12",rest:"60s",tip:"Superset both curl variations"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"60s",tip:"Paired"},
        ]},
        {day:"Day 3",label:"Legs — Heavy+",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Add 2.5kg each side"},
          {name:"Romanian Deadlift",sets:4,reps:"8",rest:"2min",tip:"Heavier"},
          {name:"Leg Press Machine",sets:5,reps:"12",rest:"90s",tip:"5 sets"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"75s",tip:"Heavier"},
          {name:"Calf Raise",sets:5,reps:"12",rest:"45s",tip:"Heavier"},
          {name:"Ab Circuit",sets:4,reps:"35s",rest:"30s",tip:"5 more seconds"},
        ]},
        {day:"Day 4",label:"Push B — DS Heavy",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"2min",tip:"Add 2.5kg"},
          {name:"Dumbbell Bench Press Drop Set",sets:4,reps:"10+8+6",rest:"2min",tip:"4 rounds of the drop set"},
          {name:"Cable Chest Fly",sets:4,reps:"15",rest:"60s",tip:"4 sets — heavier"},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"75s",tip:"Heavier"},
          {name:"Lateral Raise Drop Set",sets:4,reps:"15+12+10",rest:"60s",tip:"4 rounds of DS"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Add weight"},
        ]},
        {day:"Day 5",label:"Pull B + Legs",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:4,reps:"5",rest:"2.5min",tip:"Add 5kg"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"Heavier"},
          {name:"Single Arm Dumbbell Row",sets:4,reps:"12 each",rest:"60s",tip:"Heavier"},
          {name:"Barbell Bicep Curl",sets:4,reps:"10",rest:"45s",tip:"Add weight"},
          {name:"Barbell Hip Thrust",sets:4,reps:"10",rest:"60s",tip:"Add weight"},
          {name:"Bulgarian Split Squat",sets:4,reps:"10 each",rest:"75s",tip:"4 sets"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Peak Intensity",
      note:"Hardest week. Full use of supersets, drop sets, and max volume.",
      days:[
        {day:"Day 1",label:"Push — Max",tag:"Push",color:"#dc2626",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"3",rest:"3min",tip:"Near-max triples — heaviest bench this month"},
          {name:"Incline Dumbbell Press SS Lateral",sets:5,reps:"12+15",rest:"60s",tip:"5 rounds superset"},
          {name:"Overhead Press",sets:4,reps:"6",rest:"90s",tip:"Heavy 6 reps"},
          {name:"Cable Chest Fly",sets:3,reps:"20",rest:"60s",tip:"High rep pump — chest finish"},
          {name:"Tricep Rope Pushdown",sets:4,reps:"15",rest:"10s SS",tip:"SS"},
          {name:"Overhead Tricep Extension Drop Set",sets:3,reps:"12+10+8",rest:"60s",tip:"DS tricep finish"},
        ]},
        {day:"Day 2",label:"Pull — Max",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Weighted Pull-Up",sets:5,reps:"3",rest:"3min",tip:"Heaviest weighted pull-ups"},
          {name:"Barbell Row",sets:5,reps:"5",rest:"2.5min",tip:"5x5 heavy row"},
          {name:"Lat Pulldown SS Row",sets:5,reps:"12+15",rest:"60s",tip:"5 rounds superset"},
          {name:"Cable Face Pull",sets:4,reps:"20",rest:"45s",tip:"High rep — shoulder health"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"12",rest:"45s",tip:"Volume bicep"},
          {name:"Hammer Curl Drop Set",sets:3,reps:"12+10+8",rest:"60s",tip:"DS hammer curl finish"},
        ]},
        {day:"Day 3",label:"Legs — Max",tag:"Legs",color:"#7c3aed",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"2.5min",tip:"Heaviest squats this month"},
          {name:"Romanian Deadlift",sets:5,reps:"8",rest:"2min",tip:"5 sets RDL"},
          {name:"Leg Press Machine",sets:5,reps:"15",rest:"90s",tip:"5 sets high rep"},
          {name:"Lying Leg Curl",sets:5,reps:"12",rest:"75s",tip:"5 sets hamstrings"},
          {name:"Calf Raise",sets:6,reps:"15",rest:"45s",tip:"6 sets calves"},
          {name:"Ab Circuit",sets:5,reps:"30s",rest:"30s",tip:"5 rounds"},
        ]},
        {day:"Day 4",label:"Push B — Max",tag:"Push",color:"#dc2626",exercises:[
          {name:"Incline Barbell Press",sets:5,reps:"8",rest:"2min",tip:"5 sets heavy incline"},
          {name:"Dumbbell Bench Press Drop Set",sets:5,reps:"10+8+6",rest:"2min",tip:"5 rounds DS"},
          {name:"Cable Chest Fly",sets:4,reps:"20",rest:"60s",tip:"High rep pump"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"75s",tip:"5 sets shoulder"},
          {name:"Lateral Raise Drop Set",sets:5,reps:"15+12+10",rest:"60s",tip:"5 rounds DS laterals"},
          {name:"Skull Crusher",sets:5,reps:"10",rest:"60s",tip:"5 sets tricep mass"},
        ]},
        {day:"Day 5",label:"Pull B + Legs — Max",tag:"Pull",color:"#ea580c",exercises:[
          {name:"Deadlift",sets:4,reps:"3",rest:"3min",tip:"Heavy triples — near max"},
          {name:"Chest Supported Row",sets:5,reps:"12",rest:"60s",tip:"5 sets"},
          {name:"Barbell Bicep Curl",sets:4,reps:"8",rest:"45s",tip:"Heavy 8 reps"},
          {name:"Barbell Hip Thrust",sets:5,reps:"10",rest:"60s",tip:"5 sets heavy glutes"},
          {name:"Bulgarian Split Squat",sets:4,reps:"12 each",rest:"75s",tip:"4 sets each leg"},
          {name:"Standing Calf Raise",sets:4,reps:"20",rest:"45s",tip:"High rep finisher"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Deload",
      note:"No supersets, no drop sets this week. 60%, 3 sets. Pure recovery.",
      days:[
        {day:"Day 1",label:"Push Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"60%"},
          {name:"Overhead Press",sets:3,reps:"8",rest:"90s",tip:"Light"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Pump only"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Light"},
        ]},
        {day:"Day 2",label:"Pull Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
          {name:"Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Light"},
        ]},
        {day:"Day 3",label:"Legs Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"12",rest:"90s",tip:"Light squat — just move"},
          {name:"Romanian Deadlift",sets:3,reps:"10",rest:"90s",tip:"Light"},
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"75s",tip:"Easy"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Active recovery"},
        ]},
        {day:"Day 4",label:"Mobility",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Hold long"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough"},
          {name:"Cat Cow Stretch",sets:3,reps:"10",rest:"—",tip:"Breathe"},
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
          {name:"Barbell Back Squat",sets:3,reps:"5/5/5+",rest:"3min",tip:"Set 1: 65% TM. Set 2: 75% TM. Set 3: 85% TM × AMRAP. Training Max (TM) = 90% of your actual max"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB accessory — 5 sets × 10 at 50% of squat TM"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory hypertrophy"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Hamstring accessory"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core always"},
        ]},
        {day:"Day 2",label:"Bench Day",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/5/5+",rest:"3min",tip:"65%, 75%, 85% × AMRAP — push the last set"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10 at 50% bench TM"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Accessory volume"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder health"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Accessory tricep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Non-negotiable health work"},
        ]},
        {day:"Day 3",label:"Deadlift Day",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"65%, 75%, 85% × AMRAP. Pull every rep as fast as possible"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB accessory — 5×10 light"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Quad accessory"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Leg builder"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press Day",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/5/5+",rest:"3min",tip:"65%, 75%, 85% × AMRAP — push the OHP hard"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10 volume pressing"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Vertical pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row — 5×10"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Accessory bicep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Shoulder health"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2 (3s)", theme:"5/3/1 Wave — 3s Week",
      note:"Week 2: 70%, 80%, 90% × 3+. Heavier loads, fewer reps. Last set is AMRAP again — push it.",
      days:[
        {day:"Day 1",label:"Squat Day — 3s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% TM. Last set AMRAP — hit as many as you can with good form"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — same 50% weight"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core"},
        ]},
        {day:"Day 2",label:"Bench Day — 3s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% × AMRAP — heavy"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — same weight"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Volume"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Tricep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 3",label:"Deadlift Day — 3s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"3/3/3+",rest:"4min",tip:"70%, 80%, 90% × AMRAP. Pull hard"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Quad"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press Day — 3s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"3/3/3+",rest:"3.5min",tip:"70%, 80%, 90% × AMRAP"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3 (1s)", theme:"5/3/1 Wave — 1s Week",
      note:"Week 3: 75%, 85%, 95% × 1+. The 1s week. Last set at 95% — push for as many as you can.",
      days:[
        {day:"Day 1",label:"Squat Day — 1s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% TM. The 95% set is your peak — AMRAP"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — same"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Core"},
        ]},
        {day:"Day 2",label:"Bench Day — 1s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% × AMRAP. Record your reps"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Incline Dumbbell Press",sets:3,reps:"15",rest:"60s",tip:"Volume"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Tricep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 3",label:"Deadlift Day — 1s",tag:"Legs",color:"#0369a1",exercises:[
          {name:"Deadlift",sets:3,reps:"5/3/1+",rest:"5min",tip:"75%, 85%, 95% × AMRAP. Pull heavy — trust your training"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Leg Press Machine",sets:3,reps:"15",rest:"60s",tip:"Accessory"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"Quad"},
          {name:"Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Accessory"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press Day — 1s",tag:"Upper",color:"#0891b2",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/3/1+",rest:"4min",tip:"75%, 85%, 95% × AMRAP — overhead strength test"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Weighted Pull-Up",sets:3,reps:"10",rest:"90s",tip:"Pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Bicep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"5/3/1 Deload + Bump TM",
      note:"Wendler deload: 40%, 50%, 60% × 5. Then add 2.5kg to upper TM, 5kg to lower TM for next cycle.",
      days:[
        {day:"Day 1",label:"Squat + Bench — Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60% — very light. Just move the bar"},
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60%"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Light"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 2",label:"Deadlift + Press — Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Deadlift",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60% — easy pulls"},
          {name:"Overhead Press",sets:3,reps:"5",rest:"2min",tip:"40%, 50%, 60%"},
          {name:"Pull-Up",sets:3,reps:"8",rest:"90s",tip:"Body weight"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Light core"},
        ]},
        {day:"Day 3",label:"Mobility & Active Recovery",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Open hips"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip external rotation"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Thorough recovery"},
          {name:"Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"Easy cardio"},
        ]},
        {day:"Day 4",label:"Light Full Body",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"Light full body check-in"},
          {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"60s",tip:"Light"},
          {name:"Cable Row",sets:3,reps:"12",rest:"60s",tip:"Light"},
          {name:"Calf Raise",sets:3,reps:"20",rest:"45s",tip:"Light"},
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
          {name:"Barbell Back Squat",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New higher TM. 65/75/85% — push the AMRAP hard"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 rounds"},
        ]},
        {day:"Day 2",label:"Bench 5s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New TM — 65/75/85%"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB — 5×10"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Accessory"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep mass"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 3",label:"Deadlift 5s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"5/5/5+",rest:"4min",tip:"New TM — 65/75/85% — push AMRAP"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Volume quad"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press 5s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/5/5+",rest:"3.5min",tip:"New TM — press heavy"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2 (3s)", theme:"5/3/1 Cycle 2 — 3s",
      note:"70/80/90% of the new higher TM. You should be hitting bigger numbers than Month 5.",
      days:[
        {day:"Day 1",label:"Squat 3s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% new TM — push AMRAP"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"Core"},
        ]},
        {day:"Day 2",label:"Bench 3s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% — push hard"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Volume"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 3",label:"Deadlift 3s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"3/3/3+",rest:"4.5min",tip:"70/80/90% — pull heavy"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press 3s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"3/3/3+",rest:"4min",tip:"70/80/90% — strong OHP"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3 (1s)", theme:"5/3/1 Cycle 2 — Peak",
      note:"75/85/95% of the new higher TM. Your 95% set is heavier than ever. AMRAP — leave nothing.",
      days:[
        {day:"Day 1",label:"Squat 1s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% new TM — AMRAP the 95% set. This is a new PR zone"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"75s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"Core"},
        ]},
        {day:"Day 2",label:"Bench 1s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% — this set is a PR. Log every rep"},
          {name:"Dumbbell Bench Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Volume"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Shoulder"},
          {name:"Skull Crusher",sets:4,reps:"12",rest:"60s",tip:"Tricep"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
        {day:"Day 3",label:"Deadlift 1s",tag:"Legs",color:"#4f46e5",exercises:[
          {name:"Deadlift",sets:3,reps:"5/3/1+",rest:"5min",tip:"75/85/95% — pull your all-time best. Record the reps"},
          {name:"Romanian Deadlift",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Leg Press Machine",sets:4,reps:"15",rest:"75s",tip:"Accessory"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"60s",tip:"Accessory"},
          {name:"Calf Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"Core"},
        ]},
        {day:"Day 4",label:"Press 1s",tag:"Upper",color:"#7c3aed",exercises:[
          {name:"Overhead Press",sets:3,reps:"5/3/1+",rest:"4.5min",tip:"75/85/95% — OHP PR. You're stronger than Month 1 Week 1"},
          {name:"Dumbbell Shoulder Press",sets:5,reps:"10",rest:"90s",tip:"BBB"},
          {name:"Weighted Pull-Up",sets:4,reps:"8",rest:"90s",tip:"Pull accessory"},
          {name:"Barbell Row",sets:5,reps:"10",rest:"60s",tip:"BBB row"},
          {name:"Hammer Curl",sets:4,reps:"12",rest:"45s",tip:"Arm volume"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Health"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"True 1RM Testing",
      note:"Deload first half. Then attempt true 1RMs on all 4 main lifts. 6 months of work on display.",
      days:[
        {day:"Day 1",label:"Final Deload",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5",rest:"2min",tip:"40/50/60% — prime the CNS"},
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"2min",tip:"40/50/60%"},
          {name:"Deadlift",sets:3,reps:"3",rest:"2min",tip:"40/50/60%"},
          {name:"Overhead Press",sets:3,reps:"5",rest:"2min",tip:"40/50/60%"},
        ]},
        {day:"Day 2",label:"Active Recovery",tag:"Recovery",color:"#6b7280",exercises:[
          {name:"Hip Flexor Stretch",sets:3,reps:"60s each",rest:"—",tip:"Open everything — big test ahead"},
          {name:"Pigeon Pose",sets:3,reps:"60s each",rest:"—",tip:"Hip opener"},
          {name:"Foam Roll Full Body",sets:1,reps:"15 min",rest:"—",tip:"Prime your muscles"},
          {name:"Treadmill Walk",sets:1,reps:"15 min",rest:"—",tip:"Easy blood flow"},
        ]},
        {day:"Day 3",label:"Squat + Bench 1RM",tag:"Strength",color:"#4f46e5",exercises:[
          {name:"Barbell Back Squat",sets:1,reps:"1 max",rest:"6min",tip:"Work up: 60%, 75%, 85%, 92%, 97%, attempt 100%+ (new PR). Spotter required. This is your true max"},
          {name:"Barbell Bench Press",sets:1,reps:"1 max",rest:"6min",tip:"Same protocol — this is your 6-month bench PR"},
          {name:"Overhead Press",sets:1,reps:"1 max",rest:"5min",tip:"OHP 1RM — push overhead your all-time best"},
        ]},
        {day:"Day 4",label:"Deadlift + Pull 1RM",tag:"Strength",color:"#7c3aed",exercises:[
          {name:"Deadlift",sets:1,reps:"1 max",rest:"8min",tip:"Your strongest pull ever. 6 months of practice. Trust the process and pull"},
          {name:"Weighted Pull-Up",sets:1,reps:"max",rest:"5min",tip:"Max weight pull-up — how far have you come?"},
          {name:"Plank",sets:1,reps:"max",rest:"—",tip:"Final plank. Record your time. Compare to Month 1. The journey is the destination."},
        ]},
      ]
    },
  ]
};

export const intermediatePlan = [month1, month2, month3, month4, month5, month6];
