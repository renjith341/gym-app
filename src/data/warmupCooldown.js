// Warmup & cooldown exercise library

const ALL_EXERCISES = {
  // ── cardio ──────────────────────────────────────────────────────────────────
  wc_01: { id:'wc_01', name:'Treadmill brisk walk',         duration_seconds:180, duration_label:'3 min',  tip:'Light incline (2-3%), conversational pace. HR ~110-120.' },
  wc_02: { id:'wc_02', name:'Treadmill light jog',          duration_seconds:300, duration_label:'5 min',  tip:'Easy jog. HR ~120-140. For days when you have extra warmup time.' },
  wc_03: { id:'wc_03', name:'Stationary bike',              duration_seconds:240, duration_label:'4 min',  tip:'Light resistance, steady cadence ~80 rpm. Best on leg days to pre-warm knees.' },
  wc_04: { id:'wc_04', name:'Rowing machine easy',          duration_seconds:240, duration_label:'4 min',  tip:'Drive with legs first. Great full-body wake-up before pull or deadlift days.' },
  wc_05: { id:'wc_05', name:'Jump rope',                    duration_seconds:180, duration_label:'3 min',  tip:'30s on, 15s off × 4 rounds. Skip on heavy deadlift day if knees feel stiff.' },
  wc_06: { id:'wc_06', name:'Elliptical',                   duration_seconds:240, duration_label:'4 min',  tip:'Use the arm handles — warms shoulders too. Good before push or pull days.' },
  // ── dynamic stretches ───────────────────────────────────────────────────────
  wd_01: { id:'wd_01', name:'Arm circles',                  duration_seconds:30,  duration_label:'30s',   tip:'10 forward + 10 backward. Start small, grow bigger each rep.' },
  wd_02: { id:'wd_02', name:'Leg swings (front-to-back)',   duration_seconds:45,  duration_label:'45s',   tip:'10 each leg. Hold a wall for balance. Loosens hip flexors and hamstrings.' },
  wd_03: { id:'wd_03', name:'Leg swings (side-to-side)',    duration_seconds:45,  duration_label:'45s',   tip:'10 each leg. Opens up adductors — essential before squats.' },
  wd_04: { id:'wd_04', name:'Hip circles',                  duration_seconds:30,  duration_label:'30s',   tip:'10 each direction. Big circles, slow and controlled.' },
  wd_05: { id:'wd_05', name:'Torso twists',                 duration_seconds:30,  duration_label:'30s',   tip:'Stand wide, twist gently 10 each side. Wakes up the obliques and mid-back.' },
  wd_06: { id:'wd_06', name:"World's greatest stretch",     duration_seconds:60,  duration_label:'60s',   tip:'Lunge, hand inside front foot, rotate top arm to ceiling. 5 each side. Best single warmup move.' },
  wd_07: { id:'wd_07', name:'Walking lunge with twist',     duration_seconds:60,  duration_label:'60s',   tip:'10 reps total, twist toward front leg. Combines mobility + activation.' },
  wd_08: { id:'wd_08', name:'Inchworm to push-up',          duration_seconds:60,  duration_label:'60s',   tip:'5 reps. Walk hands out to plank, do 1 push-up, walk back. Hits hamstrings and shoulders.' },
  wd_09: { id:'wd_09', name:'Cat-cow',                      duration_seconds:45,  duration_label:'45s',   tip:'10 slow reps. Breathe out arching, breathe in dipping. Spinal warmup.' },
  wd_10: { id:'wd_10', name:'Thoracic rotations (quadruped)',duration_seconds:45, duration_label:'45s',   tip:'On hands and knees, hand behind head, rotate elbow to ceiling. 8 each side.' },
  wd_11: { id:'wd_11', name:'Cossack squats',               duration_seconds:60,  duration_label:'60s',   tip:'Wide stance, shift weight side to side, 5 each side. Excellent before any squat day.' },
  wd_12: { id:'wd_12', name:'90/90 hip switches',           duration_seconds:45,  duration_label:'45s',   tip:'Sit with one leg in front 90°, one leg side 90°, switch. 8 reps.' },
  wd_13: { id:'wd_13', name:'Frankenstein walks',           duration_seconds:30,  duration_label:'30s',   tip:'Walk forward kicking straight legs up to opposite hand. 10 reps total.' },
  wd_14: { id:'wd_14', name:'Knee hugs walking',            duration_seconds:30,  duration_label:'30s',   tip:'Walk forward, pull each knee to chest. 10 reps. Wakes up glutes.' },
  wd_15: { id:'wd_15', name:'High knees',                   duration_seconds:30,  duration_label:'30s',   tip:'Drive knees up, fast pace. Quick HR boost.' },
  wd_16: { id:'wd_16', name:'Butt kicks',                   duration_seconds:30,  duration_label:'30s',   tip:'Heels to glutes, fast pace. Gets blood into the hamstrings.' },
  // ── activation ──────────────────────────────────────────────────────────────
  wa_01: { id:'wa_01', name:'Band pull-aparts',             duration_seconds:30,  duration_label:'30s',   tip:'15 reps with light band. Non-negotiable before any pressing or pulling.' },
  wa_02: { id:'wa_02', name:'Band shoulder dislocations',   duration_seconds:45,  duration_label:'45s',   tip:'10 reps with light band. Hands wide; bring band over head and behind back. Mandatory before OHP.' },
  wa_03: { id:'wa_03', name:'Glute bridges',                duration_seconds:45,  duration_label:'45s',   tip:'15 reps, squeeze 1s at top. Wakes up sleeping glutes before squats/deadlifts.' },
  wa_04: { id:'wa_04', name:'Bird dogs',                    duration_seconds:60,  duration_label:'60s',   tip:'8 each side, hold 2s. Opposite arm and leg. Pre-deadlift core prep.' },
  wa_05: { id:'wa_05', name:'Dead bugs',                    duration_seconds:60,  duration_label:'60s',   tip:'8 each side, slow. Lower back glued to floor. Core control before heavy compounds.' },
  wa_06: { id:'wa_06', name:'Wall slides',                  duration_seconds:45,  duration_label:'45s',   tip:'10 reps, back flat against wall, arms slide up like a snow angel. Shoulder mobility.' },
  wa_07: { id:'wa_07', name:'Scap pull-ups',                duration_seconds:30,  duration_label:'30s',   tip:'Hang from bar, pull shoulder blades down without bending arms. 8 reps. Pre-pull warmup.' },
  wa_08: { id:'wa_08', name:'Banded monster walks',         duration_seconds:45,  duration_label:'45s',   tip:'Band around knees, 10 steps each direction. Activates side glutes.' },
  wa_09: { id:'wa_09', name:'Banded clamshells',            duration_seconds:45,  duration_label:'45s',   tip:'12 each side. Great for hip stability before squats and split squats.' },
  wa_10: { id:'wa_10', name:'Plank',                        duration_seconds:30,  duration_label:'30s',   tip:'30s hold, body straight. Core wake-up.' },
  wa_11: { id:'wa_11', name:'Light face pulls',             duration_seconds:45,  duration_label:'45s',   tip:'15 reps with light cable or band. Pull to face, elbows high. Shoulder health.' },
  wa_12: { id:'wa_12', name:'Push-ups',                     duration_seconds:30,  duration_label:'30s',   tip:'10 reps controlled. Chest activation before benching.' },
  // ── movement specific ───────────────────────────────────────────────────────
  wms_sq_01: { id:'wms_sq_01', name:'Bodyweight squats',         duration_seconds:30,  duration_label:'30s',  tip:'10-15 reps, full depth. Groove the pattern.' },
  wms_sq_02: { id:'wms_sq_02', name:'Goblet squats (light DB)',  duration_seconds:45,  duration_label:'45s',  tip:'8 reps with light dumbbell. Pause 1s at the bottom.' },
  wms_sq_03: { id:'wms_sq_03', name:'Empty bar squats',          duration_seconds:60,  duration_label:'60s',  tip:'5 reps with just the bar. Final groove before adding weight.' },
  wms_dl_01: { id:'wms_dl_01', name:'Bodyweight hip hinges',     duration_seconds:30,  duration_label:'30s',  tip:'10 reps, hands on hips, push hips back. Rehearse the pattern.' },
  wms_dl_02: { id:'wms_dl_02', name:'Banded good mornings',      duration_seconds:45,  duration_label:'45s',  tip:'10 reps with band around neck. Wakes up posterior chain.' },
  wms_dl_03: { id:'wms_dl_03', name:'Empty bar RDL',             duration_seconds:45,  duration_label:'45s',  tip:'5 slow reps. Feel hamstring stretch before adding load.' },
  wms_bp_01: { id:'wms_bp_01', name:'Push-ups (deliberate)',     duration_seconds:30,  duration_label:'30s',  tip:'8-10 reps slow. Pre-bench chest prep.' },
  wms_bp_02: { id:'wms_bp_02', name:'Empty bar bench',           duration_seconds:45,  duration_label:'45s',  tip:'5-8 reps with just the bar. Bar path practice.' },
  wms_bp_03: { id:'wms_bp_03', name:'Light DB press',            duration_seconds:45,  duration_label:'45s',  tip:'10 reps with very light dumbbells. Warms shoulders and triceps.' },
  wms_oh_01: { id:'wms_oh_01', name:'Scapular wall slides',      duration_seconds:45,  duration_label:'45s',  tip:'10 reps, focus on full overhead reach without arching.' },
  wms_oh_02: { id:'wms_oh_02', name:'Empty bar OHP',             duration_seconds:45,  duration_label:'45s',  tip:'5-8 reps. Lock out fully overhead.' },
  wms_oh_03: { id:'wms_oh_03', name:'Light DB lateral raise',    duration_seconds:30,  duration_label:'30s',  tip:'12 reps with very light DBs. Side delt prep.' },
  wms_pl_01: { id:'wms_pl_01', name:'Dead hang',                 duration_seconds:30,  duration_label:'30s',  tip:'Hang from bar 30s. Decompresses spine and warms grip.' },
  wms_pl_02: { id:'wms_pl_02', name:'Light cable rows',          duration_seconds:45,  duration_label:'45s',  tip:'12 reps light weight. Groove the row pattern.' },
  wms_pl_03: { id:'wms_pl_03', name:'Bodyweight pull-ups (1-2 reps)', duration_seconds:30, duration_label:'30s', tip:'1-2 strict reps as a feeler before weighted sets.' },
  // ── cooldown lower ──────────────────────────────────────────────────────────
  csl_01: { id:'csl_01', name:'Standing forward fold',       duration_seconds:60,  duration_label:'60s',   tip:'Soft knees, let head hang heavy. Don\'t bounce.' },
  csl_02: { id:'csl_02', name:'Seated hamstring stretch',    duration_seconds:60,  duration_label:'60s',   tip:'Reach for toes, 30s each side or both. Breathe into the stretch.' },
  csl_03: { id:'csl_03', name:'Standing quad stretch',       duration_seconds:60,  duration_label:'60s',   tip:'30s each leg. Grab ankle, knees together, hips forward.' },
  csl_04: { id:'csl_04', name:'Kneeling hip flexor stretch', duration_seconds:90,  duration_label:'90s',   tip:'45s each side. Push hips forward, arms overhead. Mandatory after squat or hinge days.' },
  csl_05: { id:'csl_05', name:'Pigeon pose',                 duration_seconds:120, duration_label:'2 min', tip:'60s each side. Front shin parallel to top of mat. Best post-squat stretch.' },
  csl_06: { id:'csl_06', name:'Figure-4 stretch (lying)',    duration_seconds:90,  duration_label:'90s',   tip:'45s each side. Ankle on opposite knee, pull thigh in.' },
  csl_07: { id:'csl_07', name:'Butterfly stretch',           duration_seconds:60,  duration_label:'60s',   tip:'Soles together, gently press knees down. Don\'t force.' },
  csl_08: { id:'csl_08', name:'Standing calf stretch (wall)',duration_seconds:60,  duration_label:'60s',   tip:'30s each leg. Back leg straight, heel down.' },
  csl_09: { id:'csl_09', name:'Couch stretch',               duration_seconds:90,  duration_label:'90s',   tip:'45s each. Back foot up on couch/bench, front knee 90°. Brutal but effective.' },
  csl_10: { id:'csl_10', name:'Happy baby pose',             duration_seconds:45,  duration_label:'45s',   tip:'On back, grab outside of feet, gently pull. Decompresses lower back.' },
  // ── cooldown upper ──────────────────────────────────────────────────────────
  csu_01: { id:'csu_01', name:'Doorway chest stretch',        duration_seconds:60, duration_label:'60s',   tip:'30s each arm or both at once. Forearm on doorframe, step through. Post-bench essential.' },
  csu_02: { id:'csu_02', name:'Cross-body shoulder stretch',  duration_seconds:60, duration_label:'60s',   tip:'30s each arm. Pull arm across body with opposite hand.' },
  csu_03: { id:'csu_03', name:'Overhead tricep stretch',      duration_seconds:60, duration_label:'60s',   tip:'30s each arm. Elbow up, hand down spine, gentle pull from opposite hand.' },
  csu_04: { id:'csu_04', name:"Child's pose",                 duration_seconds:60, duration_label:'60s',   tip:'Sit hips back to heels, arms long forward. Walk hands left then right for lat stretch.' },
  csu_05: { id:'csu_05', name:'Cobra / upward dog',           duration_seconds:30, duration_label:'30s',   tip:'Decompresses spine after deadlifts and squats.' },
  csu_06: { id:'csu_06', name:'Thread the needle',            duration_seconds:60, duration_label:'60s',   tip:'30s each side. On hands and knees, thread one arm under the other.' },
  csu_07: { id:'csu_07', name:'Lat hang stretch',             duration_seconds:30, duration_label:'30s',   tip:'Grab high bar, let body hang. Decompresses spine after pressing.' },
  csu_08: { id:'csu_08', name:'Neck side stretch',            duration_seconds:30, duration_label:'30s',   tip:'15s each side. Ear to shoulder, gentle. Useful after heavy farmer carries or shrugs.' },
  // ── foam rolling ────────────────────────────────────────────────────────────
  cf_01: { id:'cf_01', name:'Foam roll — Quads',              duration_seconds:60, duration_label:'60s',   tip:'30s each leg. Slow, find tender spots and pause.' },
  cf_02: { id:'cf_02', name:'Foam roll — IT band',            duration_seconds:60, duration_label:'60s',   tip:'30s each side. Side-lying. Goes a long way for knee health.' },
  cf_03: { id:'cf_03', name:'Foam roll — Hamstrings',         duration_seconds:60, duration_label:'60s',   tip:'30s each leg, sitting on roller.' },
  cf_04: { id:'cf_04', name:'Foam roll — Glutes',             duration_seconds:60, duration_label:'60s',   tip:'30s each side. Sit on roller, ankle on opposite knee.' },
  cf_05: { id:'cf_05', name:'Foam roll — Upper back',         duration_seconds:60, duration_label:'60s',   tip:'Roller across upper back, arms crossed. Great after pressing days.' },
  cf_06: { id:'cf_06', name:'Foam roll — Lats',               duration_seconds:60, duration_label:'60s',   tip:'30s each side, side-lying. Releases tight lats after pull days.' },
  cf_07: { id:'cf_07', name:'Foam roll — Calves',             duration_seconds:60, duration_label:'60s',   tip:'30s each leg. Cross opposite leg over for more pressure.' },
  cf_08: { id:'cf_08', name:'Foam roll — Adductors',          duration_seconds:60, duration_label:'60s',   tip:'30s each leg. Roll inner thigh — often very tight after squats.' },
  // ── breathing ───────────────────────────────────────────────────────────────
  cb_01: { id:'cb_01', name:'Box breathing',                  duration_seconds:120, duration_label:'2 min', tip:'4s in, 4s hold, 4s out, 4s hold. Down-regulates from training.' },
  cb_02: { id:'cb_02', name:'Diaphragmatic breathing',        duration_seconds:60,  duration_label:'60s',   tip:'Lying down, hand on belly. Deep belly breaths, 6s in, 8s out.' },
};

const DAY_RECS = {
  squat_day_or_lower_quads: {
    warmup:   ['wc_03','wd_03','wd_11','wa_03','wa_09','wms_sq_01','wms_sq_03'],
    cooldown: ['csl_04','csl_05','csl_03','cf_01','cf_08'],
  },
  deadlift_day_or_lower_hinge: {
    warmup:   ['wc_04','wd_02','wd_09','wa_03','wa_04','wms_dl_02','wms_dl_03'],
    cooldown: ['csl_02','csl_05','csu_05','csu_04','cf_03','cf_04'],
  },
  bench_push_day: {
    warmup:   ['wc_06','wd_01','wa_01','wa_06','wms_bp_01','wms_bp_02'],
    cooldown: ['csu_01','csu_03','csu_07','cf_05'],
  },
  overhead_press_day: {
    warmup:   ['wc_06','wa_02','wa_06','wa_11','wms_oh_01','wms_oh_02'],
    cooldown: ['csu_03','csu_07','csu_06','cf_05','cf_06'],
  },
  pull_day: {
    warmup:   ['wc_04','wa_01','wa_07','wa_11','wms_pl_01'],
    cooldown: ['csu_04','csu_07','csu_02','cf_06','cf_05'],
  },
  full_body_or_PPL_legs_volume: {
    warmup:   ['wc_01','wd_06','wd_11','wa_03','wa_04'],
    cooldown: ['csl_05','csl_04','csl_03','cf_01','cf_04'],
  },
  cardio_or_recovery_day: {
    warmup:   ['wd_09','wd_05','wd_04'],
    cooldown: ['csl_01','csu_04','cb_01'],
  },
};

export function detectDayType(day) {
  const tag   = (day.tag   || '').toLowerCase();
  const label = (day.label || '').toLowerCase();
  if (tag === 'recovery' || label.includes('recovery') || label.includes('mobility')) return 'cardio_or_recovery_day';
  if (tag === 'legs' || label.includes('legs') || label.includes('lower')) return 'squat_day_or_lower_quads';
  if (tag === 'pull' || label.includes('pull')) return 'pull_day';
  if (tag === 'push' || label.includes('push') || label.includes('bench')) return 'bench_push_day';
  if (label.includes('overhead') || label.includes('ohp')) return 'overhead_press_day';
  if (label.includes('deadlift') || label.includes('hinge')) return 'deadlift_day_or_lower_hinge';
  if (label.includes('upper')) return 'bench_push_day';
  return 'full_body_or_PPL_legs_volume';
}

export function getWarmupExercises(dayType) {
  return (DAY_RECS[dayType]?.warmup || DAY_RECS.full_body_or_PPL_legs_volume.warmup)
    .map(id => ALL_EXERCISES[id]).filter(Boolean);
}

export function getCooldownExercises(dayType) {
  return (DAY_RECS[dayType]?.cooldown || DAY_RECS.full_body_or_PPL_legs_volume.cooldown)
    .map(id => ALL_EXERCISES[id]).filter(Boolean);
}
