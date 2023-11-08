
const fitness_exercises = [
    {
        exercise_id: 1001,
        exercise_Name: 'Chest Exercise',
        exercise_Desc: '',
        exercise_Steps: [
            { step1: 'Place your hands formly on the ground, directly under shoulders' },
            { step2: 'Flatten your back so your entire body is straight and slowly lower your body.' },
            { step3: 'Draw shoulder blades back and down, keeping elbows tucked close to your body.' },
            { step4: 'Exhale as you push back to the starting position.' },
        ],
        exercise_video: '',
    },
    {
        exercise_id: 1002,
        exercise_Name: 'Sprinter sit-up',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: 'Lie on back with the legs straight and arms by your side, elbows bent at a 90-degree angle' },
            { step2: 'Sit up, bringing the left knee toward the right elbow ' },
            { step3: 'Lower back down to starting position' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/30_M_WIP02.gif',
    },
    {
        exercise_id: 1003,
        exercise_Name: 'Dead bugs',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: 'Lie on back with arms extended upwards and knees bent at 90degrees with feet in the air ' },
            { step2: 'Drop your arm and leg on the opposite side and make sure your leg doesn’t touch the floor ' },
            { step3: 'Bring them slowly back up to starting position and repeat with opposite side' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/29_M_WIP02.gif',
    },
    {
        exercise_id: 1004,
        exercise_Name: 'Three way crunches',
        exercise_Desc: '',
        exercise_Steps: [
            { step1: ' Lie on back, knees bent and feet hooked over each other' },
            { step2: ' Perform a sequence of 3 crunches: firstly crunch to bring right elbow toward left knee, secondly crunch straight upwards, finally crunch to bring left elbow toward right knee' },
            { step3: 'Repeat this sequence ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/28_M_WIP02.gif',
    },
    {
        exercise_id: 1005,
        exercise_Name: 'Mountain climber twists',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: 'Start on your hands and toes ' },
            { step2: 'Bending at the knee, bring your left knee forward directly under your chest while keeping your right leg straight ' },
            { step3: 'Quickly alternate legs while keeping your core muscles tight' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/27_M_WIP02.gif',
    },
    {
        exercise_id: 1006,
        exercise_Name: 'Mountain climber twists',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Start on your hands and toes' },
            { step2: 'Bending at the knee, bring your left knee forward directly under your chest while keeping your right leg straight' },
            { step3: 'Quickly alternate legs while keeping your core muscles tight' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/27_M_WIP02.gif',
    },
    {
        exercise_id: 1007,
        exercise_Name: 'Contralateral limb raises',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: 'Lie on your stomach with the arms outstretched and palms facing one another' },
            { step2: 'Slowly lift one arm a few inches off the floor, keeping it straight without rotating the shoulders' },
            { step3: ' Simultaneously lift the leg of the other side' },
            { step4: 'Hold the position, then lower the arm and leg back down' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/30_M_WIP02.gif',
    },
    {
        exercise_id: 1008,
        exercise_Name: 'Russian twist',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements',
        exercise_Steps: [
            { step1: 'Sit on floor, knees bent and feet on the floor' },
            { step2: ' Keep your back at a 45-degree angle, arms extended with palms together ' },
            { step3: ' Move the arms from one side to another in a twisting motion ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/25_M_WIP02.gif',
    },
    {
        exercise_id: 1009,
        exercise_Name: 'Supine bridge with leg extension',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Lie on back, knees bent and feet on floor, arms elevated above your head ' },
            { step2: ' Lift hips up off the ground so that your knees, hips and shoulders are in a straight diagonal line ' },
            { step3: ' Holding hips level, lift one foot off the ground 1-2 inches and slowly place down again and repeat with alternate leg ' },
            { step4: '  Keep core muscles tight throughout the entire movement  ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/24_M_WIP02.gif',
    },
    {
        exercise_id: 1010,
        exercise_Name: 'Side to side lunge with punches',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Begin facing forward and pivot to the right ' },
            { step2: ' Step your right leg back as you bend your right knee into a lunge ' },
            { step3: ' Punch forward with your left arm then your right arm ' },
            { step4: '  Step back to the middle and turn to the left, taking your left leg back and your right arm forward in a punch followed by your left arm  ' },
            { step5: '  Continue alternating sides, moving quickly  ' },
            { step6: '  To make harder, lunge deeper or add a jump in the middle  ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/23_M_V1_WIP02.gif',
    },
    {
        exercise_id: 1011,
        exercise_Name: 'Front kick plank',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need.After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Begin with feet together and the arms up in a defensive position ' },
            { step2: ' Bring the right knee up and kick outwards ' },
            { step3: ' Balancing on the left leg, bring the right leg back behind you, hands to the floor ' },
            { step4: '  Bring the left foot next to the right into a plank, holding briefly  ' },
            { step5: '  Step the left foot forward into a lunge, stand up and again kick with the right leg  ' },
            { step6: '  Continue with your front kick planks on the same leg  ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/22_M_WIP02.gif',
    },
    {
        exercise_id: 1012,
        exercise_Name: 'Advanced jumping jacks',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' With your feet wide, lower into squat ' },
            { step2: ' Extend your arms out to the sides of your shoulders, palms facing up  ' },
            { step3: ' Jump out of squat, bringing your feet together and clap your hands overhead ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/19_M_WIP02.gif',
    },
    {
        exercise_id: 1013,
        exercise_Name: 'Step up knee lifts',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Position left foot on a step and keep here throughout the entire movement ' },
            { step2: ' Step up with right leg and without touching the step with your right foot, bend your knee to bring up towards chest  ' },
            { step3: ' Step straight back down again with your right foot and then your left foot ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/18_M_V1_WIP02.gif',
    },
    {
        exercise_id: 1014,
        exercise_Name: 'Lunge with bicep curl',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Hold a weight/water bottle in each hand ' },
            { step2: ' Step forward to complete a lunge, bending at your knees to lower downward  ' },
            { step3: ' Do not let your knees pass over your toes ' },
            { step4: '  When in the downward lunge complete a bicep curl with both arms (bending at your elbows to lift weight toward shoulders)  ' },
            { step5: '  Lower weights back down again and step back to the starting position  ' },
            { step6: '  Repeat alternating legs  ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/17_M_WIP02.gif',
    },
    {
        exercise_id: 1015,
        exercise_Name: 'Fast step ups',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Complete quick step-ups, alternating legs with each step up ' },
            { step2: ' Choose a higher step to make this more difficult  ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/21_M_WIP02.gif',
    },
    {
        exercise_id: 1016,
        exercise_Name: 'Lateral hops',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Keeping your legs together, jump from side to side, jumping over an imaginary obstacle ' },
            { step2: ' Land with soft knees  ' },
            { step3: ' Try to remain on the balls of your feet ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/20_M_WIP02.gif',
    },
    {
        exercise_id: 1017,
        exercise_Name: 'Single leg deadlift',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Stand with feet together ' },
            { step2: '  Lift the right leg, and lower the arms and torso while raising the right leg behind the body ' },
            { step3: ' Keep the left knee slightly bent ' },
            { step4: ' Raise the torso while lowering the right leg ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/14_M_WIP02.gif',
    },
    {
        exercise_id: 1018,
        exercise_Name: 'Lunge with twist',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Complete a lunge, bending at both knees to lower downwards ' },
            { step2: ' Your knees should not pass over your toes ' },
            { step3: ' Whilst in the downward lunge and with abdominal muscles tightened, complete a gentle twist to either side (optional: holding a weight in hands) ' },
            { step4: ' Keep knees bent at 90 degrees, before returning to the starting position ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/13_M_WIP02.gif',
    },
    {
        exercise_id: 1019,
        exercise_Name: 'Side lunges',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Step out to the side, keeping toes pointing forward ' },
            { step2: ' Complete a lunge, bending at both knees to lower downwards  ' },
            { step3: ' Your knees should not pass over your toes ' },
            { step3: '  Step back to starting position to repeat to the opposite side ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/16_M_V2_WIP02.gif',
    },
    {
        exercise_id: 1020,
        exercise_Name: 'Donkey kicks',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Position self on forearms and knees ' },
            { step2: ' Keeping core tight, kick 1 leg backwards into the air ' },
            { step3: ' Bend knee to bring leg back down and the knee toward your chest ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/15_M_WIP02.gif',
    },
    {
        exercise_id: 1021,
        exercise_Name: 'Backward lunge with front kick',
        exercise_Desc: 'Before you get into your workout it’s important to warm up. Just five minutes of light activity is all you need. After your workout, cool down by following any of the above activities, again for five minutes. This is also a great time to stretch your muscles holding each stretch for 20-30 seconds. Make sure you hold at a point where you can feel the stretch but you shouldn’t feel discomfort or pain. Don’t bounce through these, just slow steady movements.',
        exercise_Steps: [
            { step1: ' Start with feet together ' },
            { step2: ' Step back with one foot to complete a lunge  ' },
            { step3: ' Step back toward starting position, swinging your leg through to complete a kick ' },
            { step3: ' Return to starting position and repeat ' },
        ],
        exercise_video: 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/12_M_WIP02.gif',
    },
];

const getExercisesOfDayInSevenDaysPlan = () => {
    const shuffledExercises = [...fitness_exercises];
    shuffledExercises.sort(() => Math.random() - 0.5);
    return shuffledExercises.slice(0, 15);
}
const getExercisesOfDayInTwentyOneDaysPlan = () => {
    const shuffledExercises = [...fitness_exercises];
    shuffledExercises.sort(() => Math.random() - 0.5);
    return shuffledExercises.slice(0, 21);
}

export {
    fitness_exercises,
    getExercisesOfDayInSevenDaysPlan,
    getExercisesOfDayInTwentyOneDaysPlan
}