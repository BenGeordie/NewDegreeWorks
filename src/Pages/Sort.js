function addCreditBlock(emptyPlan, semesterNum) {
    var creditBlock = [];
    var n;
    for (n = 0; n < semesterNum; n ++){
        creditBlock.push(0);
    }
    emptyPlan.push(creditBlock);
}

// // TEST CASE
// // console.log("TESTCASE: addCreditBlock, emptyPlan0")
// var emptyPlan0 = [];
// addCreditBlock(emptyPlan0, 5);
// // console.log(emptyPlan0);

function addWorkloadBlock(emptyPlan, semesterNum){
    var workloadBlock = [];
    var n;
    for (n = 0; n < semesterNum; n++){
        workloadBlock.push(0);
    }
    emptyPlan.push(workloadBlock);
}

// // TEST CASE
// // Independent
// // console.log("INDEPENDENT TESTCASE: addWorkloadBlock, emptyPlan1")
// var emptyPlan1 = [];
// addWorkloadBlock(emptyPlan1, 5);
// // console.log(emptyPlan1);
// // Dependent
// // console.log("DEPENDENT TESTCASE: addWorkloadBlock, emptyPlan0")
// addWorkloadBlock(emptyPlan0, 5);
// // console.log(emptyPlan0);



// emptyPlan has to have empty semseterNum number of semester blocks, a credit block, and a workload block.
function labelSemesters(emptyPlan, semesterNum, startSem, startYear){
    if (emptyPlan.length < semesterNum + 2) {
        throw new Error("emptyPlan array is not long enough. Perhaps it is generated with semesterNum less " +
            "than the semesterNum argument passed to labelSemesters, or credit and workload blocks aren't added properly")
    }
    var n;
    for (n = 0; n < semesterNum; n++) {
        if (n === 0){
            emptyPlan[n].push([startSem, startYear]);
        } else {
            var fallOrSpring = emptyPlan[n-1][0][0];
            var year = emptyPlan[n-1][0][1];
            if (fallOrSpring === "Fall") {
                emptyPlan[n].push(["Spring", year + 1]);
            } else {
                emptyPlan[n].push(["Fall", year]);
            }
        }
    }
}

// // TEST CASE
// // Independent
// // console.log("INDEPENDENT TESTCASE: labelSemester, emptyPlan2")
// var emptyPlan2 = [[],[],[],[],[],["credit block"],["workload block"]];
// labelSemesters(emptyPlan2, 5, "Spring",2018);
// // console.log(emptyPlan2);
// // The next test case intentionally causes error and is intentionally commented out more.
// // // console.log("ERROR TESTCASE: labelSemester, emptyPlan3, intentional error")
// var emptyPlan3 = [];
// // labelSemesters(emptyPlan3, 5, "Spring",2018);
// // // console.log(emptyPlan3);
// // Dependent
// // console.log("DEPENDENT TESTCASE: labelSemester, emptyPlan0")
// emptyPlan0 = [[],[],[],[],[]].concat(emptyPlan0)
// labelSemesters(emptyPlan0, 5, "Spring",2018);
// // console.log(emptyPlan0);



function generateEmptyPlan(semesterNum, startSem, startYear){
    /*
	Given a number n of semesters left, output a sequence with n inner sequences,
	each representing a semester. Format: [[[Semester,Year] , "course name"], [credit hour in semester_idx],
	[workload rating in semester_idx]]. Any inner sequences after semester blocks are considered extra
	information blocks.
     */
    var emptyPlan = [];
    var n;
    for (n = 0; n < semesterNum; n++){
        emptyPlan.push([]);
    }
    addCreditBlock(emptyPlan, semesterNum);
    addWorkloadBlock(emptyPlan, semesterNum);
    labelSemesters(emptyPlan, semesterNum, startSem, startYear);
    return emptyPlan
}

// // TEST CASE
// // console.log("INDEPENDENT TESTCASE: generateEmptyPlan, emptyPlan4")
// var emptyPlan4 = generateEmptyPlan(5, "Fall", 2018);
// // console.log(emptyPlan4);



function inappropriateCreditHourCount(chosenCourse, coursesDetails, semester, plan, semesterNum, preferredCreditLimit){
    // // console.log("num:", semesterNum)
    // // console.log("sem:", semester)
    // console.log("current credits:", plan[semesterNum][semester])
    var creditHoursIncludingChosenCourse = plan[semesterNum][semester] + coursesDetails[chosenCourse][0];
    // console.log("credits including course:", creditHoursIncludingChosenCourse)
    if (creditHoursIncludingChosenCourse > preferredCreditLimit){
        return true;
    }
    return false;
}

// // TEST CASE
// // DEPENDENT, expected false
// // console.log("DEPENDENT TESTCASE: inappropriateCreditHourCount, emptyPlan4, expected: false")
// var status0 = inappropriateCreditHourCount("STAT", {"STAT": [5, 0]}, 3, emptyPlan4, 5, 20);
// // console.log("result:", status0);
// // INDEPENDENT, expected true
// var emptyPlan5 = [
//     [ [ 'Fall', 2018 ] ],
//     [ [ 'Spring', 2019 ] ],
//     [ [ 'Fall', 2019 ] ],
//     [ [ 'Spring', 2020 ] ],
//     [ [ 'Fall', 2020 ] ],
//     [ 0, 0, 0, 18, 0 ],
//     [ 0, 0, 0, 0, 0 ]
// ]
// // console.log("DEPENDENT TESTCASE: inappropriateCreditHourCount, emptyPlan4, expected: true")
// var status1 = inappropriateCreditHourCount("STAT", {"STAT": [5, 0]}, 3, emptyPlan5, 5, 20);
// // console.log("result:", status1);



function inappropriateCreditHourCountInCompvaredPlan(semester, plan, semesterNum){
    var totalCreditHours = plan[semesterNum][semester];
    if (totalCreditHours > 18){
        return true;
    }
    return false;
}

// // TEST CASE
// // DEPENDENT, expected false
// // console.log("DEPENDENT TESTCASE: inappropriateCreditHourCount, emptyPlan4, expected: false")
// var status2 = inappropriateCreditHourCountInCompvaredPlan(3, emptyPlan5, 5);
// // console.log("result:", status2);
// // INDEPENDENT, expected true
// var emptyPlan6 = [
//     [ [ 'Fall', 2018 ] ],
//     [ [ 'Spring', 2019 ] ],
//     [ [ 'Fall', 2019 ] ],
//     [ [ 'Spring', 2020 ] ],
//     [ [ 'Fall', 2020 ] ],
//     [ 0, 0, 0, 20, 0 ],
//     [ 0, 0, 0, 0, 0 ]
// ]
// // console.log("DEPENDENT TESTCASE: inappropriateCreditHourCount, emptyPlan4, expected: true")
// var status3 = inappropriateCreditHourCountInCompvaredPlan(3, emptyPlan6, 5);
// // console.log("result:", status3);

// TEST CASES DONE TIL HERE. TEST CASES FROM HERE ON NEED REVISION.


function tooMuchWork(chosenCourse, coursesDetails, semester, plan, semesterNum, preferredDifficultyLevel){
    var workloadIncludingChosenCourse = plan[semesterNum + 1][semester] + coursesDetails[chosenCourse][3];
    if (workloadIncludingChosenCourse > preferredDifficultyLevel){
        return true;
    }
    return false;
}

// // TEST CASES
// // DEPENDENT, expected false
// status4 = tooMuchWork("STAT", {"STAT": [0,2,"Spring", 10]}, 2, emptyPlan1, 5, 9);
// // console.log("status3", status3)

function wrongSemester(chosenCourse, coursesDetails, semester, plan){
    // console.log("chosen", chosenCourse)
    // console.log("semester", semester)
    // // console.log("plan", plan)
    // console.log("semester", plan[semester][0][0]);
    // console.log("offered", toBeScheduled[chosenCourse][2]);
    if (coursesDetails[chosenCourse][2] .indexOf(plan[semester][0][0]) === -1){
        return true;
    }
    return false;
}

// TEST CASES
// status4 = wrongSemester("STAT", {"STAT": [0,2,"Spring"]}, 2, emptyPlan1);
// // console.log("status4", status4);

function prereqAfterOrWithCourse(chosenCourse, coursesDetails, semester, plan, semesterNum){
    /*
    Given the chosen course , a mapping of courses' details, a prospective semester
	for the course, the current plan, and number of semesters, output True if a prereq
	of the chosen course is scheduled after or at the same time as the chosen course,
	and False otherwise.
     */
    // // console.log("prereqs", toBeScheduled[chosenCourse][1])
    var prereqIndex, semesterAfterOrWithCourse;
    for (prereqIndex = 0; prereqIndex < coursesDetails[chosenCourse][1].length; prereqIndex++){
        for (semesterAfterOrWithCourse = semester; semesterAfterOrWithCourse < semesterNum; semesterAfterOrWithCourse++){
            if (plan[semesterAfterOrWithCourse] .indexOf(coursesDetails[chosenCourse][1][prereqIndex]) != -1){
                // // console.log(plan[semesterAfterOrWithCourse])
                // // console.log("prereq", prereq)
                // // console.log("after")
                return true;
            }
        }
    }
    var semesterBeforeCourse;
    for (semesterBeforeCourse = 0; semesterBeforeCourse < (semester + 1); semesterBeforeCourse++){
        for (var course in plan[semesterBeforeCourse]){
            if (course in coursesDetails){
                if (coursesDetails[course][1] .indexOf(chosenCourse) != -1){
                    // // console.log("before")
                    return true;
                }
            }
        }
    }
    return false;
}

// TEST CASES
// // console.log(emptyPlan1)
// status5 = prereqAfterOrWithCourse("STAT", {"STAT": [0,["MATH"],"Spring"]}, 2, emptyPlan1, 5);
// // console.log("status5", status5);

function noConflict(chosenCourse, coursesDetails, semester, plan, semesterNum, preferredCreditLimit, difficultyLevel){
    /*
    Given the chosen course, a mapping of courses' details, a prospective semester
	for the course, the current plan and the total number of semesters, output
	True if there is no conflict, and False otherwise.
    */
    if (wrongSemester(chosenCourse, coursesDetails, semester, plan)){
        // console.log("no conflict status: false")
        return false;
    }
    if (tooMuchWork(chosenCourse, coursesDetails, semester, plan, semesterNum, difficultyLevel)){
        // console.log("no conflict status: false")
        return false;
    }
    if (inappropriateCreditHourCount(chosenCourse, coursesDetails, semester, plan, semesterNum, preferredCreditLimit)){
        // console.log("no conflict status: false")
        return false;
    }
    if (prereqAfterOrWithCourse(chosenCourse, coursesDetails, semester, plan, semesterNum)){
        // console.log("no conflict status: false")
        return false;
    }
    // console.log("no conflict status: true")
    return true;
}

function sort(courses, coursesDetails, plan, semesterNum, preferredCreditLimit, difficultyLevel, planNum){
    /*
    Given a list of courses, a mapping of courses' details, an empty plan (sequence
	with n inner sequences, each representing a semester) , and number of semesters
	left, output all possible degree plans.
    */
    // //console.log("courses", courses);
    var allPlans = [];
    // BASE CASE
    if (courses.length === 0){
        // console.log("success!");
        // console.log("plan", plan);
        allPlans.push(plan);
        return allPlans;
    }
    // RECURSIVE CASE
    var semester
    for (semester = 0; semester < semesterNum; semester++){
        // console.log("semester:", semester, "course:", courses[0]);
        var noConflictStatus = noConflict(courses[0], coursesDetails, semester, plan, semesterNum, preferredCreditLimit, difficultyLevel)
        if (noConflictStatus){
            var planCopy = [];
            var semesterBlockIndex
            for (semesterBlockIndex = 0; semesterBlockIndex < plan.length; semesterBlockIndex++){
                planCopy.push(plan[semesterBlockIndex].slice()); // slice is for copying array
            }
            var coursesCopy = courses.slice();
            var course = coursesCopy.shift();
            // //console.log("copy", coursesCopy)
            planCopy[semester].push(course);
            // // console.log("PLAN", plan)
            // // console.log("PLANCOPY", planCopy)
            planCopy[semesterNum][semester] += coursesDetails[course][0];
            planCopy[semesterNum + 1][semester] += coursesDetails[course][3];
            // // console.log("plan after adding chosen course:", planCopy)
            allPlans = allPlans.concat(sort(coursesCopy, coursesDetails, planCopy, semesterNum, preferredCreditLimit, difficultyLevel, planNum));
            if (allPlans.length >= planNum){
                // console.log("ENOUGH PLANS ALREADY")
                break;
            }
        } else if (semester === semesterNum - 1 && !noConflictStatus) {
            // console.log("no place for", courses[0]);
        }
    }
    return allPlans;
}


// var courses_details2 = {"ARCH 225": [3, [], "Fall", 2.53],
//     "COMP 310": [4, ["COMP 215"], "Fall and Spring", 3.85],
//     "COMP 321": [4, ["ELEC 220", "COMP 215"], "Spring", 4.19],
//     "COMP 322": [4, ["COMP 215"], "Spring", 3.09],
//     "COMP 382": [4, ["COMP 182"], "Fall", 4.12],
//     "COMP 412": [4, ["COMP 321", "COMP 215"], "Fall", 3.59],
//     "COMP 421": [4, ["COMP 215", "COMP 321"], "Spring", 4.6],
//     "COMP 420": [4, ["COMP 421"], "Fall", 3.15],
//     "COMP 440": [4, ["COMP 310", "STAT 315", "MATH 354"], "Fall", 4.22],
//
//     "ECON 200": [4, ["ECON 100", "MATH 102"], "Fall and Spring", 3],
//     "ECON 203": [3, ["ECON 200"], "Fall and Spring", 2.22],
//     "ECON 209": [4, ["ECON 100", "STAT 315"], "Fall and Spring", 2.96],
//     "ECON 300": [3, ["ECON 200", "STAT 315"], "Fall and Spring", 2.82],
//
//     "ECON 210": [3, ["ECON 100"], "Fall and Spring", 1.8],
//     "ECON 422": [3, ["ECON 200", "ECON 203"], "Fall and Spring", 2.56],
//     "ECON 445": [3, ["ECON 200"], "Fall", 2.79],
//     "ECON 450": [3, ["ECON 200", "ECON 203"], "Fall", 3.04],
//     "ECON 462": [4, ["ECON 200", "ECON 209"], "Fall", 4.5],
//     "ECON 470": [3, ["ECON 200", "STAT 315"], "Fall", 3.11],
//
//     "LPAP 100": [1, [], "Fall and Spring", 1.36],
//
//     "CHIN 211": [3, [], "Fall", 2.4],
//     "CHIN 212": [3, ["CHIN 211"], "Spring", 3.33],
//     "BUSI 464": [3, [], "Spring", 2.86]}
// // "CHIN 212": [3, ["CHIN 211"], "Spring", 3.33],
// // "BUSI 464": [3, [], "Spring", 2.86],
//
// var courses2 = Object.keys(courses_details2)
// var semester_num1 = 6
// var start_sem1 = "Fall"
// var start_year1 = 2019
// var preferred_credit_limit1 = 18
// var difficulty_level1 = 17
// var plan_num1 = 2
// var plan1 = generate_empty_plan(semester_num1, start_sem1, start_year1)
// // // // console.log(plan1)
// var plan2_with_priority = [[['Fall', 2019], "COMP 215", "STAT 315", "COMP 390", "BUSI 469"], [['Spring', 2020], "MATH 211/212", "PSYC 203"], [['Fall', 2020]], [['Spring', 2021]], [['Fall', 2021]], [['Spring', 2022]], [14, 6, 0, 0, 0, 0], [12, 7, 0, 0, 0, 0]]
// var possible_degree_plans = sort(courses2, courses_details2, plan2_with_priority, semester_num1, preferred_credit_limit1, difficulty_level1,  plan_num1)
//
// console.log("POSSIBLE DEGREE PLAN:")
// console.log()
// console.log()
// console.log("--------------------------------------------")
// possible_degree_plans.forEach((degree_plan) => (console.log(degree_plan)))
// console.log("--------------------------------------------")
// console.log("number of plans:", possible_degree_plans.length)

export default sort;


