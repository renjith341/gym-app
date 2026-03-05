export const month2 = {
  id: 2,
  label: "Month 2",
  theme: "Strength Foundation",
  description: "Upper/Lower split all month. Consistent progressive overload on big lifts. 4-5 days/week.",
  gradient: ["#0d9488","#059669"],
  weeks: [
    {
      id:1, label:"Week 1", theme:"New Split Groove",
      note:"Full month of Upper/Lower. Week 1 is your new baseline — log every weight lifted.",
      days:[
        {day:"Day 1",label:"Upper Push Heavy",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Start 5-10% heavier than your Month 1 Week 4 weight"},
          {name:"Incline Barbell Press",sets:3,reps:"10",rest:"75s",tip:"Switch to barbell incline for more load potential"},
          {name:"Dumbbell Shoulder Press",sets:3,reps:"12",rest:"75s",tip:"Seated for stability — brace hard through each rep"},
          {name:"Cable Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Cable keeps tension at bottom unlike dumbbells"},
          {name:"Close Grip Bench Press",sets:3,reps:"12",rest:"60s",tip:"Elbows close to body — more tricep than chest"},
          {name:"Tricep Overhead Extension",sets:3,reps:"15",rest:"45s",tip:"Full long head stretch at top"},
        ]},
        {day:"Day 2",label:"Lower Squat Focus",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"120s",tip:"5x5 protocol — heavier than Month 1, lower reps, more rest"},
          {name:"Leg Press Machine",sets:4,reps:"10",rest:"75s",tip:"Heavier than Month 1 with 10 reps instead of 12"},
          {name:"Hack Squat Machine",sets:3,reps:"12",rest:"60s",tip:"New exercise — feet forward, upright torso, great quad builder"},
          {name:"Leg Extension Machine",sets:3,reps:"15",rest:"60s",tip:"Finisher — pump the quads"},
          {name:"Seated Calf Raise",sets:5,reps:"12",rest:"45s",tip:"5 sets — calves are stubborn, they need volume"},
          {name:"Ab Circuit",sets:3,reps:"30s",rest:"30s",tip:"Plank + side plank + hollow hold — 30s each, no rest between"},
        ]},
        {day:"Day 3",label:"Upper Pull Heavy",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Weighted Pull Up",sets:4,reps:"6",rest:"90s",tip:"Add weight belt or hold dumbbell between feet — bodyweight if still building"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Hinge at 45 degrees, drive elbows back, bar to belly button"},
          {name:"Chest Supported Row",sets:3,reps:"12",rest:"60s",tip:"Lie face down on incline bench with dumbbells — no cheating"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:"Non-negotiable every week — protects shoulder joint"},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:"Lie back on incline — full stretch on bicep at bottom"},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:"Brachialis builds arm thickness"},
        ]},
        {day:"Day 4",label:"Lower Hinge Focus",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Romanian Deadlift",sets:5,reps:"5",rest:"120s",tip:"5x5 protocol — go heavier than Month 1"},
          {name:"Lying Leg Curl",sets:4,reps:"10",rest:"75s",tip:"4 second eccentric — this is growth stimulus"},
          {name:"Barbell Hip Thrust",sets:4,reps:"12",rest:"60s",tip:"Barbell across hips — heavy glute work"},
          {name:"Bulgarian Split Squat",sets:3,reps:"8 each",rest:"75s",tip:"Heavier than Month 1 — 8 reps with more weight"},
          {name:"Standing Calf Raise",sets:5,reps:"12",rest:"45s",tip:"5 sets — add weight from month 1"},
          {name:"Hanging Leg Raise",sets:4,reps:"12",rest:"45s",tip:"4 sets now — add a hold at top"},
        ]},
        {day:"Day 5 ✦",label:"Shoulders + Cardio",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Barbell Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Standing — engages core and traps too. Push press if needed on last rep"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Superset next exercise for time"},
          {name:"Cable Rear Delt Fly",sets:4,reps:"15",rest:"45s",tip:"Superset with laterals — full shoulder circuit"},
          {name:"Incline Treadmill Walk",sets:1,reps:"20 min",rest:"—",tip:"10-12% incline, moderate pace — great for fat burn"},
        ]},
      ]
    },
    {
      id:2, label:"Week 2", theme:"Load Progression",
      note:"Add weight to every main compound lift this week. Even 2.5kg counts.",
      days:[
        {day:"Day 1",label:"Upper Push",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5-5kg from week 1"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:"Extra set this week"},
          {name:"Dumbbell Shoulder Press",sets:3,reps:"10",rest:"75s",tip:"Lower reps, heavier dumbbells"},
          {name:"Cable Lateral Raise",sets:4,reps:"15",rest:"45s",tip:""},
          {name:"Close Grip Bench Press",sets:3,reps:"10",rest:"60s",tip:"Heavier than week 1"},
          {name:"Tricep Overhead Extension",sets:3,reps:"12",rest:"45s",tip:""},
        ]},
        {day:"Day 2",label:"Lower Squat",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"5",rest:"120s",tip:"Add 2.5-5kg from last week — 5x5 progression"},
          {name:"Leg Press Machine",sets:4,reps:"10",rest:"75s",tip:"Heavier than week 1"},
          {name:"Hack Squat Machine",sets:3,reps:"10",rest:"60s",tip:"Lower reps, more weight"},
          {name:"Leg Extension Machine",sets:3,reps:"15",rest:"60s",tip:""},
          {name:"Seated Calf Raise",sets:5,reps:"12",rest:"45s",tip:"Heavier calf raises"},
          {name:"Ab Circuit",sets:3,reps:"35s",rest:"30s",tip:"5 more seconds each movement"},
        ]},
        {day:"Day 3",label:"Upper Pull",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Weighted Pull Up",sets:4,reps:"6",rest:"90s",tip:"Add more weight or do more reps than week 1"},
          {name:"Barbell Row",sets:4,reps:"8",rest:"90s",tip:"Heavier bar"},
          {name:"Chest Supported Row",sets:3,reps:"12",rest:"60s",tip:"Heavier dumbbells"},
          {name:"Cable Face Pull",sets:4,reps:"15",rest:"45s",tip:""},
          {name:"Incline Dumbbell Curl",sets:3,reps:"12",rest:"45s",tip:""},
          {name:"Hammer Curl",sets:3,reps:"12",rest:"45s",tip:""},
        ]},
        {day:"Day 4",label:"Lower Hinge",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Romanian Deadlift",sets:5,reps:"5",rest:"120s",tip:"Add weight — 5x5 progression"},
          {name:"Lying Leg Curl",sets:4,reps:"10",rest:"75s",tip:"Heavier"},
          {name:"Barbell Hip Thrust",sets:4,reps:"10",rest:"60s",tip:"Heavier barbell, 2 fewer reps"},
          {name:"Bulgarian Split Squat",sets:3,reps:"8 each",rest:"75s",tip:"More weight than week 1"},
          {name:"Standing Calf Raise",sets:5,reps:"12",rest:"45s",tip:""},
          {name:"Hanging Leg Raise",sets:4,reps:"15",rest:"45s",tip:"More reps this week"},
        ]},
        {day:"Day 5 ✦",label:"Shoulders + Cardio",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Barbell Overhead Press",sets:4,reps:"8",rest:"90s",tip:"Add 2.5kg from week 1"},
          {name:"Dumbbell Lateral Raise",sets:4,reps:"15",rest:"45s",tip:"Superset with rear delts"},
          {name:"Cable Rear Delt Fly",sets:4,reps:"15",rest:"45s",tip:""},
          {name:"Stairmaster Machine",sets:1,reps:"25 min",rest:"—",tip:"Moderate pace, no rail leaning"},
        ]},
      ]
    },
    {
      id:3, label:"Week 3", theme:"Volume Peak",
      note:"Highest volume week of Month 2. Your body is adapted — push harder.",
      days:[
        {day:"Day 1",label:"Upper Push",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:5,reps:"8",rest:"90s",tip:"5 sets this week — highest bench volume yet"},
          {name:"Incline Barbell Press",sets:4,reps:"10",rest:"75s",tip:""},
          {name:"Dumbbell Shoulder Press",sets:4,reps:"10",rest:"75s",tip:"4 sets"},
          {name:"Cable Lateral Raise",sets:4,reps:"20",rest:"45s",tip:"Higher reps — shoulder endurance week"},
          {name:"Close Grip Bench Press",sets:4,reps:"10",rest:"60s",tip:"4 sets"},
          {name:"Tricep Rope Pushdown",sets:3,reps:"15",rest:"45s",tip:"Swap variation"},
        ]},
        {day:"Day 2",label:"Lower Squat",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:5,reps:"6",rest:"120s",tip:"One more rep than weeks 1-2"},
          {name:"Leg Press Machine",sets:5,reps:"10",rest:"75s",tip:"5 sets — legs need volume"},
          {name:"Hack Squat Machine",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          {name:"Leg Extension Machine",sets:4,reps:"15",rest:"60s",tip:"4 sets — full quad pump"},
          {name:"Seated Calf Raise",sets:5,reps:"15",rest:"45s",tip:"More reps"},
          {name:"Ab Circuit",sets:4,reps:"30s",rest:"30s",tip:"4 rounds"},
        ]},
        {day:"Day 3",label:"Upper Pull",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Weighted Pull Up",sets:5,reps:"5",rest:"90s",tip:"5 sets — more weight if possible"},
          {name:"Barbell Row",sets:5,reps:"8",rest:"90s",tip:"5 sets"},
          {name:"Chest Supported Row",sets:4,reps:"12",rest:"60s",tip:"4 sets"},
          {name:"Cable Face Pull",sets:4,reps:"20",rest:"45s",tip:"More reps this week"},
          {name:"Incline Dumbbell Curl",sets:4,reps:"12",rest:"45s",tip:"4 sets"},
          {name:"Hammer Curl",sets:3,reps:"15",rest:"45s",tip:"More reps"},
        ]},
        {day:"Day 4",label:"Lower Hinge",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Romanian Deadlift",sets:5,reps:"6",rest:"120s",tip:"Extra rep vs weeks 1-2"},
          {name:"Lying Leg Curl",sets:5,reps:"10",rest:"75s",tip:"5 sets — hamstrings need it"},
          {name:"Barbell Hip Thrust",sets:5,reps:"12",rest:"60s",tip:"5 sets — heaviest hip thrusts yet"},
          {name:"Bulgarian Split Squat",sets:3,reps:"10 each",rest:"75s",tip:"More reps"},
          {name:"Standing Calf Raise",sets:5,reps:"15",rest:"45s",tip:"Higher rep range"},
          {name:"Toes To Bar",sets:3,reps:"10",rest:"45s",tip:"Graduate from leg raises — straight leg version if possible"},
        ]},
        {day:"Day 5 ✦",label:"Shoulders + Cardio",tag:"Cardio",color:"#22c55e",exercises:[
          {name:"Barbell Overhead Press",sets:5,reps:"6",rest:"90s",tip:"5 sets — overhead PR attempt"},
          {name:"Dumbbell Lateral Raise",sets:5,reps:"15",rest:"45s",tip:"5 sets"},
          {name:"Cable Rear Delt Fly",sets:4,reps:"15",rest:"45s",tip:""},
          {name:"Rowing Machine",sets:1,reps:"25 min",rest:"—",tip:"Legs + back cardio — moderate pace"},
        ]},
      ]
    },
    {
      id:4, label:"Week 4", theme:"Deload + Test",
      note:"Reduce volume by 40% but maintain intensity. Allow body to recover and supercompensate. Test 1 rep maxes on Friday.",
      days:[
        {day:"Day 1",label:"Upper Push — Light",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Barbell Bench Press",sets:3,reps:"5",rest:"90s",tip:"Same weight as week 3 — 3 sets only, feel how strong you are"},
          {name:"Incline Barbell Press",sets:2,reps:"10",rest:"75s",tip:"Light — deload week"},
          {name:"Dumbbell Shoulder Press",sets:2,reps:"12",rest:"75s",tip:"Light"},
          {name:"Tricep Rope Pushdown",sets:2,reps:"15",rest:"45s",tip:"Light pump only"},
        ]},
        {day:"Day 2",label:"Lower — Light",tag:"Lower",color:"#ef4444",exercises:[
          {name:"Barbell Back Squat",sets:3,reps:"5",rest:"120s",tip:"Same weight — fewer sets — feel the strength"},
          {name:"Romanian Deadlift",sets:3,reps:"5",rest:"120s",tip:"Same weight — fewer sets"},
          {name:"Leg Press Machine",sets:2,reps:"12",rest:"75s",tip:"Light"},
          {name:"Seated Calf Raise",sets:3,reps:"15",rest:"45s",tip:""},
        ]},
        {day:"Day 3",label:"Upper Pull — Light",tag:"Upper",color:"#a855f7",exercises:[
          {name:"Weighted Pull Up",sets:3,reps:"5",rest:"90s",tip:"Deload — fewer sets, same weight"},
          {name:"Barbell Row",sets:3,reps:"6",rest:"90s",tip:"Light"},
          {name:"Cable Face Pull",sets:3,reps:"15",rest:"45s",tip:"Keep face pulls every week regardless"},
          {name:"Barbell Bicep Curl",sets:2,reps:"12",rest:"45s",tip:"Light"},
        ]},
        {day:"Day 4",label:"Strength Test Day",tag:"Strength",color:"#f59e0b",exercises:[
          {name:"Barbell Back Squat 1RM",sets:1,reps:"1 max",rest:"5 min",tip:"Work up slowly: 60%, 75%, 85%, 90%, 95%, attempt max. Rest 3-5 min between"},
          {name:"Barbell Bench Press 1RM",sets:1,reps:"1 max",rest:"5 min",tip:"Same warmup protocol — attempt monthly best"},
          {name:"Romanian Deadlift Max",sets:1,reps:"3 max",rest:"5 min",tip:"Test 3 rep max instead of 1 for safety"},
          {name:"Barbell Overhead Press Max",sets:1,reps:"1 max",rest:"5 min",tip:"Record all numbers — compare to Month 1"},
        ]},
      ]
    }
  ]
};
