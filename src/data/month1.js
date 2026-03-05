export const month1 = {
  id: 1,
  label: "Month 1",
  theme: "Re-Activation",
  description: "Rebuild movement patterns, wake up sleeping muscles. 4 days/week full body.",
  gradient: ["#1d4ed8","#6d28d9"],
  weeks: [
    {
      id:1, label:"Week 1", theme:"Getting Started",
      note:"Focus on form, not weight. Rest 60–90s between sets. Every rep counts.",
      days:[
        {day:"Day 1",label:"Full Body A",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Goblet Squat",sets:3,reps:"12",rest:"60s",tip:"Heels flat, chest up, elbows inside knees at bottom"},
          {name:"Dumbbell Bench Press",sets:3,reps:"12",rest:"60s",tip:"Control descent 3 sec, press explosively up"},
          {name:"Seated Cable Row",sets:3,reps:"12",rest:"60s",tip:"Sit tall, pull to lower chest, squeeze 1s at end"},
          {name:"Dumbbell Romanian Deadlift",sets:3,reps:"10",rest:"60s",tip:"Push hips back, bar drags down legs, feel hamstring stretch"},
          {name:"Overhead Dumbbell Press",sets:3,reps:"12",rest:"60s",tip:"Core braced, don't lean back, full lockout overhead"},
          {name:"Plank",sets:3,reps:"30s",rest:"45s",tip:"Body is one straight line, squeeze glutes and abs"},
        ]},
        {day:"Day 2",label:"Cardio + Mobility",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Treadmill Brisk Walk",sets:1,reps:"20 min",rest:"—",tip:"Zone 2 pace — you should be able to hold full sentences"},
          {name:"Hip Flexor Stretch",sets:2,reps:"45s each",rest:"—",tip:"Deep lunge, push hips forward, arms up for extra stretch"},
          {name:"Cat Cow Stretch",sets:2,reps:"10 reps",rest:"—",tip:"Breathe out to arch (cat), breathe in to dip (cow)"},
          {name:"Thoracic Rotation",sets:2,reps:"10 each side",rest:"—",tip:"Sit on bench, rotate from upper back only, not hips"},
          {name:"Band Pull Apart",sets:2,reps:"15",rest:"—",tip:"Arms straight at chest height, pull band apart to T shape"},
        ]},
        {day:"Day 3",label:"Full Body B",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"60s",tip:"Feet shoulder-width, don't lock knees at top, full range"},
          {name:"Lat Pulldown",sets:3,reps:"12",rest:"60s",tip:"Lean slightly back, pull to upper chest, feel lats stretch at top"},
          {name:"Incline Dumbbell Press",sets:3,reps:"12",rest:"60s",tip:"30-45 degree bench, elbows 45 degrees from torso"},
          {name:"Dumbbell Lunges",sets:3,reps:"10 each leg",rest:"60s",tip:"Long step forward, back knee hovers above floor"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Rope at forehead height, pull to face, elbows high and wide"},
          {name:"Dead Bug Exercise",sets:3,reps:"8 each",rest:"45s",tip:"Lower back stays glued to floor, move opposite arm and leg"},
        ]},
        {day:"Day 4",label:"Full Body C",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Trap Bar Deadlift",sets:3,reps:"10",rest:"90s",tip:"Stand inside bar, push floor away, hips and shoulders rise together"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Slight elbow bend, squeeze chest at centre, hug a tree motion"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace on bench, pull elbow past hip, squeeze back not arm"},
          {name:"Lying Leg Curl",sets:3,reps:"12",rest:"60s",tip:"Hips down, curl heels to glutes, lower slowly 3 seconds"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Lead with elbows not hands, slight bend in elbow, stop at shoulder height"},
          {name:"Ab Wheel Rollout",sets:3,reps:"10",rest:"45s",tip:"Start kneeling, roll out until back is straight, pull back with abs"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Adding Load",
      note:"Same movements — add 2-5% weight where last week felt easy. One extra set on key lifts.",
      days:[
        {day:"Day 1",label:"Full Body A+",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Goblet Squat",sets:3,reps:"15",rest:"60s",tip:"More reps — add small weight if 12 felt easy"},
          {name:"Dumbbell Bench Press",sets:4,reps:"12",rest:"60s",tip:"Extra set this week"},
          {name:"Seated Cable Row",sets:3,reps:"12",rest:"60s",tip:"Pause 1s at contraction every rep"},
          {name:"Dumbbell Romanian Deadlift",sets:4,reps:"10",rest:"60s",tip:"Extra set — push the weight slightly"},
          {name:"Overhead Dumbbell Press",sets:3,reps:"12",rest:"60s",tip:"3 second eccentric on the way down"},
          {name:"Plank Hip Dip",sets:3,reps:"30s",rest:"45s",tip:"From forearm plank, rotate hips side to side for obliques"},
        ]},
        {day:"Day 2",label:"Cardio + Core",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Stationary Bike",sets:1,reps:"25 min",rest:"—",tip:"Conversational Zone 2 — heart rate around 120-140"},
          {name:"Bicycle Crunch",sets:3,reps:"15 each",rest:"30s",tip:"Slow and deliberate, don't pull neck, twist from ribs"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"30s",tip:"Dead hang, raise knees to chest, lower with control"},
          {name:"Bird Dog Exercise",sets:3,reps:"10 each",rest:"30s",tip:"Opposite arm leg, hold 2s at top, hips level throughout"},
        ]},
        {day:"Day 3",label:"Full Body B+",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Leg Press Machine",sets:4,reps:"12",rest:"60s",tip:"4 sets now — increase weight from week 1"},
          {name:"Lat Pulldown",sets:3,reps:"12",rest:"60s",tip:"Add slight weight from week 1"},
          {name:"Incline Dumbbell Press",sets:3,reps:"12",rest:"60s",tip:"2 up, 3 down tempo this week"},
          {name:"Walking Dumbbell Lunge",sets:3,reps:"12 each",rest:"60s",tip:"Add light dumbbells — walk forward continuously"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Elbows must stay above shoulder height"},
          {name:"Cable Woodchop",sets:3,reps:"12 each",rest:"45s",tip:"Rotate from core not arms, keep arms fairly straight"},
        ]},
        {day:"Day 4",label:"Full Body C+",tag:"Strength",color:"#3b82f6",exercises:[
          {name:"Trap Bar Deadlift",sets:4,reps:"10",rest:"90s",tip:"4 sets — go heavier than week 1"},
          {name:"Cable Chest Fly",sets:3,reps:"15",rest:"60s",tip:"Squeeze at centre, hold 1s contraction"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Heavier than week 1 — full ROM"},
          {name:"Lying Leg Curl",sets:3,reps:"12",rest:"60s",tip:"Slower eccentric this week — 4 seconds down"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Slightly heavier dumbbells"},
          {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"45s",tip:"2 more reps than week 1"},
        ]},
        {day:"Day 5 ✦",label:"Active Recovery",tag:"Recovery",color:"#f97316",exercises:[
          {name:"Light Outdoor Walk",sets:1,reps:"30 min",rest:"—",tip:"Casual pace outdoors — fresh air helps recovery"},
          {name:"Full Body Stretching",sets:1,reps:"20 min",rest:"—",tip:"Hold each stretch 45 seconds — focus on hips and chest"},
          {name:"Foam Roller Massage",sets:1,reps:"10 min",rest:"—",tip:"Roll quads, IT band, thoracic spine — 30s each area"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Upper/Lower Split",
      note:"Switching to Upper/Lower split — more volume per muscle group. Rest 75-90s compound, 45-60s isolation.",
      days:[
        {day:"Day 1",label:"Upper — Push",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"10",rest:"90s",tip:"Bar to lower chest, elbows 45 degrees, drive up explosively"},
          {name:"Incline Dumbbell Press",sets:3,reps:"12",rest:"75s",tip:"30-45 degree angle, upper chest focus"},
          {name:"Seated Dumbbell Press",sets:3,reps:"12",rest:"75s",tip:"Core tight, full overhead lockout, control descent"},
          {name:"Dumbbell Lateral Raise",sets:3,reps:"15",rest:"45s",tip:"Slow and deliberate — 2s up, 3s down"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Elbows locked at sides, spread rope at bottom"},
          {name:"Overhead Tricep Extension",sets:2,reps:"15",rest:"45s",tip:"Elbows close to head, full stretch at top"},
        ]},
        {day:"Day 2",label:"Lower — Quads",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"10",rest:"90s",tip:"Bar on upper traps, brace core, knees track over toes"},
          {name:"Leg Press Machine",sets:3,reps:"12",rest:"75s",tip:"Full range, feet shoulder-width, don't let lower back round"},
          {name:"Leg Extension Machine",sets:3,reps:"15",rest:"60s",tip:"Full extension, squeeze at top, 3s down"},
          {name:"Walking Dumbbell Lunge",sets:3,reps:"10 each",rest:"60s",tip:"Long stride, knee hovers above floor"},
          {name:"Seated Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Full stretch at bottom, hold 1s at top"},
          {name:"Plank",sets:3,reps:"40s",rest:"45s",tip:"Arms extended is harder — try both versions"},
        ]},
        {day:"Day 3",label:"Upper — Pull",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"Wide grip, lean back slightly, pull to upper chest"},
          {name:"Seated Cable Row",sets:3,reps:"12",rest:"75s",tip:"Wide grip variant — pull to sternum, elbows out"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:"Brace on bench, elbow past hip, hold 1s at top"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Non-negotiable for shoulder health — every week"},
          {name:"Barbell Bicep Curl",sets:3,reps:"12",rest:"45s",tip:"Supinate at top, slow eccentric, no body swing"},
          {name:"Hammer Curl",sets:2,reps:"12",rest:"45s",tip:"Neutral grip, works brachialis — pairs well with barbell curl"},
        ]},
        {day:"Day 4",label:"Lower — Hinge",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Romanian Deadlift",sets:4,reps:"10",rest:"90s",tip:"Hip hinge back, bar drags down legs, hamstring stretch at bottom"},
          {name:"Lying Leg Curl",sets:3,reps:"12",rest:"75s",tip:"Slow 3-4s eccentric — this is where growth happens"},
          {name:"Barbell Hip Thrust",sets:3,reps:"15",rest:"60s",tip:"Shoulders on bench, drive hips up, squeeze glutes hard at top"},
          {name:"Dumbbell Step Up",sets:3,reps:"10 each",rest:"60s",tip:"Drive through heel of lead foot, full hip extension"},
          {name:"Standing Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Heavy weight, full range — calves need high volume"},
          {name:"Hanging Leg Raise",sets:3,reps:"12",rest:"45s",tip:"Control the swing — quality over quantity"},
        ]},
        {day:"Day 5 ✦",label:"Cardio / Weak Points",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Stairmaster Machine",sets:1,reps:"25 min",rest:"—",tip:"Don't lean on rails — upright posture for full glute activation"},
          {name:"Cable Rear Delt Fly",sets:3,reps:"15",rest:"45s",tip:"Arms wide, slight elbow bend — most people neglect rear delts"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Progressive Overload",
      note:"Final week of Month 1 — aim for 5-10% more weight than week 3 wherever form holds perfectly.",
      days:[
        {day:"Day 1",label:"Upper A — Heavy",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Heavier — hit a new personal best this week"},
          {name:"Incline Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Extra set added — push the weight"},
          {name:"Seated Dumbbell Press",sets:4,reps:"10",rest:"75s",tip:"Heaviest overhead pressing of the month"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"4 sets now"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:""},
          {name:"Overhead Tricep Extension",sets:3,reps:"12",rest:"45s",tip:""},
        ]},
        {day:"Day 2",label:"Lower A — Heavy",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:4,reps:"8",rest:"90s",tip:"Month 1 squat PR — record the weight for Month 2 reference"},
          {name:"Leg Press Machine",sets:4,reps:"12",rest:"75s",tip:"4 sets — heaviest leg press of the month"},
          {name:"Leg Extension Machine",sets:3,reps:"15",rest:"60s",tip:""},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"Rear foot on bench — hardest leg exercise, most rewarding"},
          {name:"Seated Calf Raise",sets:4,reps:"15",rest:"45s",tip:"Heaviest calf work of the month"},
          {name:"Plank Extended Arms",sets:3,reps:"45s",rest:"45s",tip:"Harder version — arms straight out in front"},
        ]},
        {day:"Day 3",label:"Upper B — Heavy",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Lat Pulldown",sets:4,reps:"10",rest:"90s",tip:"Heaviest pull of the month"},
          {name:"Bent Over Barbell Row",sets:4,reps:"10",rest:"90s",tip:"Hip hinge to 45 degrees, pull bar to belly button, big back exercise"},
          {name:"Single Arm Dumbbell Row",sets:3,reps:"12 each",rest:"60s",tip:""},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:""},
          {name:"Barbell Bicep Curl",sets:3,reps:"10",rest:"45s",tip:"Heaviest curl of the month"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"3 sets now"},
        ]},
        {day:"Day 4",label:"Lower B — Heavy",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Romanian Deadlift",sets:4,reps:"8",rest:"90s",tip:"Month 1 RDL PR — go heavy with perfect form"},
          {name:"Lying Leg Curl",sets:4,reps:"12",rest:"75s",tip:"4 sets"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Add barbell across hips if bodyweight feels too easy"},
          {name:"Dumbbell Step Up",sets:3,reps:"12 each",rest:"60s",tip:"Heavier dumbbells than week 3"},
          {name:"Standing Calf Raise",sets:4,reps:"12",rest:"45s",tip:"Heaviest standing calf work yet"},
          {name:"Ab Wheel Rollout",sets:3,reps:"12",rest:"60s",tip:"Try to extend further than week 2"},
        ]},
        {day:"Day 5 ✦",label:"Deload + Celebrate",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Rowing Machine",sets:1,reps:"20 min",rest:"—",tip:"Full body cardio to close out month 1 — drive with legs first"},
          {name:"Full Body Stretch",sets:1,reps:"20 min",rest:"—",tip:"Month 1 complete! Log your lifts and compare to Day 1 🎉"},
        ]},
      ]
    }
  ]
};
