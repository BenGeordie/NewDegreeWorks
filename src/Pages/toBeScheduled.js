const toBeScheduled = [
    {
        priorityPlan: [[['Fall', 2019], "COMP 215", "STAT 315", "COMP 390", "BUSI 469"],
            [['Spring', 2020], "MATH 211/212", "PSYC 203"], [['Fall', 2020]], [['Spring', 2021]],
            [['Fall', 2021]], [['Spring', 2022]], [14, 6, 0, 0, 0, 0], [12, 7, 0, 0, 0, 0]],
        semesterNum: 6,
        startSem: "Fall",
        startYear: 2019,
        preferredCreditLimit: 18,
        difficultyLevel: 17,
        planNum: 2,
        coursesDetails: {"ARCH 225": [3, [], "Fall", 2.53],
            "COMP 310": [4, ["COMP 215"], "Fall and Spring", 3.85],
            "COMP 321": [4, ["ELEC 220", "COMP 215"], "Spring", 4.19],
            "COMP 322": [4, ["COMP 215"], "Spring", 3.09],
            "COMP 382": [4, ["COMP 182"], "Fall", 4.12],
            "COMP 412": [4, ["COMP 321", "COMP 215"], "Fall", 3.59],
            "COMP 421": [4, ["COMP 215", "COMP 321"], "Spring", 4.6],
            "COMP 420": [4, ["COMP 421"], "Fall", 3.15],
            "COMP 440": [4, ["COMP 310", "STAT 315", "MATH 354"], "Fall", 4.22],

            "ECON 200": [4, ["ECON 100", "MATH 102"], "Fall and Spring", 3],
            "ECON 203": [3, ["ECON 200"], "Fall and Spring", 2.22],
            "ECON 209": [4, ["ECON 100", "STAT 315"], "Fall and Spring", 2.96],
            "ECON 300": [3, ["ECON 200", "STAT 315"], "Fall and Spring", 2.82],

            "ECON 210": [3, ["ECON 100"], "Fall and Spring", 1.8],
            "ECON 422": [3, ["ECON 200", "ECON 203"], "Fall and Spring", 2.56],
            "ECON 445": [3, ["ECON 200"], "Fall", 2.79],
            "ECON 450": [3, ["ECON 200", "ECON 203"], "Fall", 3.04],
            "ECON 462": [4, ["ECON 200", "ECON 209"], "Fall", 4.5],
            "ECON 470": [3, ["ECON 200", "STAT 315"], "Fall", 3.11],

            "LPAP 100": [1, [], "Fall and Spring", 1.36],

            "CHIN 211": [3, [], "Fall", 2.4],
            "CHIN 212": [3, ["CHIN 211"], "Spring", 3.33],
            "BUSI 464": [3, [], "Spring", 2.86]}
    }];

export default toBeScheduled