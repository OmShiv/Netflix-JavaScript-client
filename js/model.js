'use strict';

var Netflix = Netflix || {};

Netflix.DBModel = (function () {
    // private
    // collapse this data (list & movies) in your code editor for convenience
    // In real time, this should be a one-time AJAX call-then-cache.
    // Couldn't get time to implement the same.
    // singleton, closure
    var modelInstance;
    function createInstance () {
        return {
            fetchMovieList: function () {
                return mockResponse.lists;
            },
            fetchMovie: function (id) {
                return mockResponse.movies[id].summary;
            }
        }
    }

    /*
     * Mock Response
     */
    var mockResponse = {
    "lists": [
        {
            "summary": {
                "type": "RecentlyWatchedList",
                "displayName": "Continue Watching"
            },
            "movies": [
                "70120777",
                "70272742",
                "70118304"
            ]
        },
        {
            "summary": {
                "type": "QueueList",
                "displayName": "Instant Queue"
            },
            "movies": [
                "60020844",
                "70166234",
                "70143824",
                "70122128",
                "70158332",
                "70189289",
                "70143836"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "context": "topTen",
                "displayName": "Top 10"
            },
            "movies": [
                "70143855",
                "70175666",
                "70136112",
                "70157472",
                "70222359",
                "70136147",
                "70183165",
                "70177011",
                "70171934",
                "70176984"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "context": "popularTitles",
                "displayName": "Popular on Netflix"
            },
            "movies": [
                "70242311",
                "70143836",
                "70178217",
                "70206672",
                "70208102",
                "70196145",
                "70142441",
                "70153382",
                "70153380",
                "70217913",
                "70171942",
                "70143824",
                "70202589",
                "70136141",
                "70158329",
                "70143842"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "Witty TV Shows"
            },
            "movies": [
                "70142441",
                "70153380",
                "70171942",
                "70202589",
                "70143842",
                "70202753",
                "70136120",
                "70157152",
                "70136124",
                "70143809",
                "70153394",
                "70140450",
                "70140365",
                "70185015",
                "70185133",
                "70157187"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "Kids' TV"
            },
            "movies": [
                "70234440",
                "70150438",
                "70177007",
                "70177043",
                "70177038",
                "70177044",
                "70264612",
                "70268352",
                "70269018",
                "70175666",
                "70142083",
                "70178215",
                "70281343",
                "70268448",
                "70171947",
                "70275375"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "TV Shows"
            },
            "movies": [
                "70153382",
                "70136141",
                "70158329",
                "70153396",
                "70136135",
                "70136120",
                "70157152",
                "70136119",
                "70143825",
                "70158330",
                "70136124",
                "70142436",
                "70143809",
                "70136122",
                "70153393",
                "70266352"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "Exciting Movies"
            },
            "movies": [
                "70217913",
                "70153850",
                "70141586",
                "70112368",
                "70153859",
                "70173048",
                "70035994",
                "1171557",
                "70230088",
                "70171581",
                "70228039",
                "60001462",
                "70202134",
                "880640",
                "70183164",
                "70205463"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "TV Action & Adventure"
            },
            "movies": [
                "70136119",
                "70158330",
                "70142436",
                "70158331",
                "70136140",
                "70136138",
                "70140365",
                "70143810",
                "70259680",
                "70179954",
                "70136130",
                "70140458",
                "70210883",
                "70136102",
                "70140383",
                "70231692"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "displayName": "TV Action & Adventure"
            },
            "movies": [
                "70228042",
                "70228191",
                "60022689",
                "60027274",
                "70000794",
                "60001070",
                "70232039",
                "22004581",
                "70140322",
                "70252883",
                "70058022",
                "70021637",
                "70209163",
                "498716",
                "70044900",
                "1152469"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "context": "similars",
                "displayName": "Because you watched Bob's Burgers"
            },
            "movies": [
                "70136115",
                "70143809",
                "70216972",
                "70153386",
                "70155554",
                "70143815",
                "70140450",
                "70136124",
                "70136141",
                "70143842",
                "70140361",
                "70179977",
                "70185015",
                "70220281",
                "70242963",
                "70140358"
            ]
        },
        {
            "summary": {
                "type": "VideoList",
                "context": "similars",
                "displayName": "Because you watched Arrested Development"
            },
            "movies": [
                "70242963",
                "70140361",
                "70136124",
                "70157196",
                "70153408",
                "70185015",
                "70136141",
                "70253798",
                "70157152",
                "70217140",
                "70179977",
                "70157187",
                "70171942",
                "60001462",
                "70140450",
                "70270742"
            ]
        },
        {
            "summary": {
                "type": "SocialList",
                "displayName": "Popular on Facebook"
            },
            "movies": [
                "70280714",
                "70130180",
                "70142083",
                "70278880",
                "70258405",
                "70264333",
                "70242800",
                "70177007",
                "70208258",
                "70278879",
                "70180051",
                "70042389",
                "70171947",
                "14607635",
                "70140322",
                "70244539"
            ]
        }
    ],
    "movies": {
        "498716": {
            "summary": {
                "id": 498716,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2556/2612556.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2552/2612552.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7535/2187535.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7534/2187534.jpg"
                },
                "title": {
                    "title_short": "Ferris Bueller's Day Off"
                }
            }
        },
        "880640": {
            "summary": {
                "id": 880640,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1040/2341040.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1036/2341036.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/4214/2354214.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/4213/2354213.jpg"
                },
                "title": {
                    "title_short": "Pulp Fiction"
                }
            }
        },
        "1152469": {
            "summary": {
                "id": 1152469,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3283/2133283.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3279/2133279.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3433/2133433.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3432/2133432.jpg"
                },
                "title": {
                    "title_short": "Liar Liar"
                }
            }
        },
        "1171557": {
            "summary": {
                "id": 1171557,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6145/2436145.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6141/2436141.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5241/2455241.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5240/2455240.jpg"
                },
                "title": {
                    "title_short": "Hercules"
                }
            }
        },
        "11819086": {
            "summary": {
                "id": 11819086,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5149/2625149.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5145/2625145.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1910/2621910.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1909/2621909.jpg"
                },
                "title": {
                    "title_short": "The Truman Show"
                }
            }
        },
        "14607635": {
            "summary": {
                "id": 14607635,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1142/2471142.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1138/2471138.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1522/2471522.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1521/2471521.jpg"
                },
                "title": {
                    "title_short": "Mulan: Special Edition"
                }
            }
        },
        "17236549": {
            "summary": {
                "id": 17236549,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2252/2492252.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2248/2492248.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0576/2490576.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0575/2490575.jpg"
                },
                "title": {
                    "title_short": "Antz"
                }
            }
        },
        "22004581": {
            "summary": {
                "id": 22004581,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2603/2482603.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/2599/2482599.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1874/2621874.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1873/2621873.jpg"
                },
                "title": {
                    "title_short": "South Park: Bigger, Longer and Uncut"
                }
            }
        },
        "60001070": {
            "summary": {
                "id": 60001070,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/0989/2140989.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0985/2140985.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1072/2141072.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1071/2141071.jpg"
                },
                "title": {
                    "title_short": "Clue"
                }
            }
        },
        "60001136": {
            "summary": {
                "id": 60001136,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1637/2401637.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1632/2401632.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1780/2401780.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1779/2401779.jpg"
                },
                "title": {
                    "title_short": "Monkeybone"
                }
            }
        },
        "60001462": {
            "summary": {
                "id": 60001462,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/4154/2634154.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4150/2634150.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/4267/2634267.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/4266/2634266.jpg"
                },
                "title": {
                    "title_short": "Star Trek II: The Wrath of Khan"
                }
            }
        },
        "60020844": {
            "summary": {
                "id": 60020844,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/7371/1767371.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/7367/1767367.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7434/1767434.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7433/1767433.jpg"
                },
                "title": {
                    "title_short": "An American Werewolf in London"
                }
            }
        },
        "60022689": {
            "summary": {
                "id": 60022689,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2133/1062133.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3401/713401.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1479/71479.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8620/58620.jpg"
                },
                "title": {
                    "title_short": "Super Troopers"
                }
            }
        },
        "60024947": {
            "summary": {
                "id": 60024947,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1950/2361950.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1946/2361946.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2438/2362438.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2437/2362437.jpg"
                },
                "title": {
                    "title_short": "Confessions of a Dangerous Mind"
                }
            }
        },
        "60027274": {
            "summary": {
                "id": 60027274,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3544/2563544.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3540/2563540.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3606/2563606.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3605/2563605.jpg"
                },
                "title": {
                    "title_short": "Who Framed Roger Rabbit"
                }
            }
        },
        "60034573": {
            "summary": {
                "id": 60034573,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1748/2221748.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1744/2221744.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2038/2222038.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2037/2222037.jpg"
                },
                "title": {
                    "title_short": "13 Going on 30"
                }
            }
        },
        "70000794": {
            "summary": {
                "id": 70000794,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9751/2699751.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9747/2699747.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0267/2700267.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0266/2700266.jpg"
                },
                "title": {
                    "title_short": "Happy Gilmore"
                }
            }
        },
        "70021637": {
            "summary": {
                "id": 70021637,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/0607/1670607.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0603/1670603.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0283/1670283.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0282/1670282.jpg"
                },
                "title": {
                    "title_short": "The Longest Yard"
                }
            }
        },
        "70035994": {
            "summary": {
                "id": 70035994,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5363/1585363.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5359/1585359.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5912/1585912.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5911/1585911.jpg"
                },
                "title": {
                    "title_short": "Serenity"
                }
            }
        },
        "70042389": {
            "summary": {
                "id": 70042389,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8906/2578906.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8900/2578900.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0515/2580515.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0513/2580513.jpg"
                },
                "title": {
                    "title_short": "The Very Hungry Caterpillar"
                }
            }
        },
        "70044900": {
            "summary": {
                "id": 70044900,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7072/2697072.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7068/2697068.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7360/2697360.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7359/2697359.jpg"
                },
                "title": {
                    "title_short": "Jackass: Number Two"
                }
            }
        },
        "70049505": {
            "summary": {
                "id": 70049505,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5293/2065293.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5289/2065289.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/4816/2064816.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/4815/2064815.jpg"
                },
                "title": {
                    "title_short": "Cow Belles"
                }
            }
        },
        "70058022": {
            "summary": {
                "id": 70058022,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5406/2145406.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5402/2145402.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5410/2145410.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5409/2145409.jpg"
                },
                "title": {
                    "title_short": "Hot Rod"
                }
            }
        },
        "70059004": {
            "summary": {
                "id": 70059004,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3383/2313383.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3379/2313379.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3710/2313710.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3709/2313709.jpg"
                },
                "title": {
                    "title_short": "Read It and Weep"
                }
            }
        },
        "70085433": {
            "summary": {
                "id": 70085433,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4199/2534199.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4195/2534195.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5779/2535779.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5778/2535778.jpg"
                },
                "title": {
                    "title_short": "Masterpiece Classic: Mansfield Park"
                }
            }
        },
        "70099715": {
            "summary": {
                "id": 70099715,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2895/2042895.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/2891/2042891.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3164/2043164.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3163/2043163.jpg"
                },
                "title": {
                    "title_short": "Alice Upside Down"
                }
            }
        },
        "70112368": {
            "summary": {
                "id": 70112368,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3966/2413966.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3962/2413962.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3997/2413997.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3996/2413996.jpg"
                },
                "title": {
                    "title_short": "The Cabin in the Woods"
                }
            }
        },
        "70115021": {
            "summary": {
                "id": 70115021,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2864/2602864.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2860/2602860.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2908/2602908.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2907/2602907.jpg"
                },
                "title": {
                    "title_short": "Princess: A Modern Fairytale"
                }
            }
        },
        "70118304": {
            "summary": {
                "id": 70118304,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6834/2036834.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6830/2036830.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6073/2036073.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6072/2036072.jpg"
                },
                "title": {
                    "title_short": "Tinker Bell and the Lost Treasure"
                }
            }
        },
        "70118305": {
            "summary": {
                "id": 70118305,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2924/2312924.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2920/2312920.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3683/2313683.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3682/2313682.jpg"
                },
                "title": {
                    "title_short": "Princess Protection Program"
                }
            }
        },
        "70120777": {
            "summary": {
                "id": 70120777,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9052/1079052.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9549/749549.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1596/71596.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8737/58737.jpg"
                },
                "title": {
                    "title_short": "Fireman Sam: Help Is Here!"
                }
            }
        },
        "70122128": {
            "summary": {
                "id": 70122128,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7074/2167074.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7070/2167070.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7875/2167875.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7874/2167874.jpg"
                },
                "title": {
                    "title_short": "Fish Story"
                }
            }
        },
        "70123710": {
            "summary": {
                "id": 70123710,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4973/1604973.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4969/1604969.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8959/1598959.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8958/1598958.jpg"
                },
                "title": {
                    "title_short": "Minor Details"
                }
            }
        },
        "70130180": {
            "summary": {
                "id": 70130180,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2163/2212163.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/2159/2212159.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2176/2212176.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2175/2212175.jpg"
                },
                "title": {
                    "title_short": "LEGO: The Adventures of Clutch Powers"
                }
            }
        },
        "70136102": {
            "summary": {
                "id": 70136102,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5091/2095091.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5087/2095087.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5141/2095141.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5140/2095140.jpg"
                },
                "title": {
                    "title_short": "24",
                    "playback_title": "24: Season 1: \"12:00 Midnight-1:00 A.M.\""
                },
                "next_episode_id": 70132898
            }
        },
        "70136112": {
            "summary": {
                "id": 70136112,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/4594/1314594.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4454/1314454.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3951/1313951.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3920/1313920.jpg"
                },
                "title": {
                    "title_short": "The Office (U.K.)",
                    "playback_title": "The Office: Series 1: \"Downsize\""
                },
                "next_episode_id": 70075285
            }
        },
        "70136115": {
            "summary": {
                "id": 70136115,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8191/1088191.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3437/813437.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8216/68216.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5517/55517.jpg"
                },
                "title": {
                    "title_short": "King of the Hill",
                    "playback_title": "King of the Hill: Season 1: \"Pilot\""
                },
                "next_episode_id": 70133337
            }
        },
        "70136119": {
            "summary": {
                "id": 70136119,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8493/1088493.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3648/813648.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8220/68220.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5521/55521.jpg"
                },
                "title": {
                    "title_short": "Battlestar Galactica",
                    "playback_title": "Battlestar Galactica: Season 1: \"Water\""
                },
                "next_episode_id": 70152337
            }
        },
        "70136120": {
            "summary": {
                "id": 70136120,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8533/1088533.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3681/813681.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8221/68221.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5522/55522.jpg"
                },
                "title": {
                    "title_short": "The Office (U.S.)",
                    "playback_title": "The Office: Season 1: \"Pilot\""
                },
                "next_episode_id": 70069628
            }
        },
        "70136122": {
            "summary": {
                "id": 70136122,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4405/2324405.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4401/2324401.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/4503/2324503.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/4502/2324502.jpg"
                },
                "title": {
                    "title_short": "Weeds",
                    "playback_title": "Weeds: Season 1: \"You Can't Miss the Bear\""
                },
                "next_episode_id": 70094484
            }
        },
        "70136123": {
            "summary": {
                "id": 70136123,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9178/1089178.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4253/814253.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8224/68224.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5525/55525.jpg"
                },
                "title": {
                    "title_short": "Bones",
                    "playback_title": "Bones: Season 1: \"Pilot\""
                },
                "next_episode_id": 70133280
            }
        },
        "70136124": {
            "summary": {
                "id": 70136124,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8496/1088496.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3651/813651.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8225/68225.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5526/55526.jpg"
                },
                "title": {
                    "title_short": "30 Rock",
                    "playback_title": "30 Rock: Season 1: \"Pilot\""
                },
                "next_episode_id": 70080670
            }
        },
        "70136130": {
            "summary": {
                "id": 70136130,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8499/1088499.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3654/813654.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8229/68229.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5532/55532.jpg"
                },
                "title": {
                    "title_short": "Heroes",
                    "playback_title": "Heroes: Season 1: \"Genesis (aka In His Own Image)\""
                },
                "next_episode_id": 70080179
            }
        },
        "70136135": {
            "summary": {
                "id": 70136135,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9686/2759686.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9679/2759679.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/9936/2759936.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/9935/2759935.jpg"
                },
                "title": {
                    "title_short": "Mad Men",
                    "playback_title": "Mad Men: Season 1: \"5G\""
                },
                "next_episode_id": 70143384
            }
        },
        "70136138": {
            "summary": {
                "id": 70136138,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0826/2110826.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/0822/2110822.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1129/2111129.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1128/2111128.jpg"
                },
                "title": {
                    "title_short": "The X-Files",
                    "playback_title": "The X-Files: Season 1: \"Pilot\""
                },
                "next_episode_id": 70134160
            }
        },
        "70136140": {
            "summary": {
                "id": 70136140,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7726/2497726.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7722/2497722.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7901/2497901.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7900/2497900.jpg"
                },
                "title": {
                    "title_short": "Star Trek",
                    "playback_title": "Star Trek: Season 1: \"Charlie \"X\"\""
                },
                "next_episode_id": 70109438
            }
        },
        "70136141": {
            "summary": {
                "id": 70136141,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9184/1089184.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4259/814259.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8237/68237.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5541/55541.jpg"
                },
                "title": {
                    "title_short": "It's Always Sunny in Philadelphia",
                    "playback_title": "It's Always Sunny in Philadelphia: Season 1: \"Charlie Got Molested\""
                },
                "next_episode_id": 70224491
            }
        },
        "70136147": {
            "summary": {
                "id": 70136147,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3157/2313157.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3153/2313153.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3791/2313791.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3790/2313790.jpg"
                },
                "title": {
                    "title_short": "Wizards of Waverly Place",
                    "playback_title": "Wizards of Waverly Place: Season 1: \"Crazy Ten Minute Sale\""
                },
                "next_episode_id": 70099847
            }
        },
        "70137635": {
            "summary": {
                "id": 70137635,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3505/2313505.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3501/2313501.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3719/2313719.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3718/2313718.jpg"
                },
                "title": {
                    "title_short": "StarStruck"
                }
            }
        },
        "70140322": {
            "summary": {
                "id": 70140322,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8407/2498407.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8403/2498403.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8573/2498573.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8572/2498572.jpg"
                },
                "title": {
                    "title_short": "Kevin Hart: Seriously Funny"
                }
            }
        },
        "70140358": {
            "summary": {
                "id": 70140358,
                "is_original": true,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5526/2495526.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5522/2495522.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5384/2495384.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5383/2495383.jpg"
                },
                "title": {
                    "title_short": "Arrested Development",
                    "playback_title": "Arrested Development: Season 1: \"Top Banana\""
                },
                "next_episode_id": 70133675
            }
        },
        "70140361": {
            "summary": {
                "id": 70140361,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2147/1792147.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/2143/1792143.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8235/68235.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5564/55564.jpg"
                },
                "title": {
                    "title_short": "Better Off Ted",
                    "playback_title": "Better Off Ted: Season 1: \"Pilot\""
                },
                "next_episode_id": 70133194
            }
        },
        "70140365": {
            "summary": {
                "id": 70140365,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1344/2541344.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1340/2541340.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5968/2535968.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5967/2535967.jpg"
                },
                "title": {
                    "title_short": "Buffy the Vampire Slayer",
                    "playback_title": "Buffy the Vampire Slayer: Season 1: \"Welcome to the Hellmouth\""
                },
                "next_episode_id": 70133727
            }
        },
        "70140383": {
            "summary": {
                "id": 70140383,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9209/1089209.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4284/814284.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8274/68274.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5585/55585.jpg"
                },
                "title": {
                    "title_short": "Dollhouse",
                    "playback_title": "Dollhouse: Season 1: \"Ghost\""
                },
                "next_episode_id": 70133233
            }
        },
        "70140450": {
            "summary": {
                "id": 70140450,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6636/2756636.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6630/2756630.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7399/2757399.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7397/2757397.jpg"
                },
                "title": {
                    "title_short": "The IT Crowd",
                    "playback_title": "The IT Crowd: Series 1: \"Yesterday's Jam\""
                },
                "next_episode_id": 70116818
            }
        },
        "70140458": {
            "summary": {
                "id": 70140458,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8587/1088587.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3724/813724.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7952/67952.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5110/55110.jpg"
                },
                "title": {
                    "title_short": "Torchwood",
                    "playback_title": "Torchwood: Season 1: \"Everything Changes\""
                },
                "next_episode_id": 70128915
            }
        },
        "70141586": {
            "summary": {
                "id": 70141586,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1850/2091850.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1846/2091846.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6399/2106399.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6398/2106398.jpg"
                },
                "title": {
                    "title_short": "Thor"
                }
            }
        },
        "70142083": {
            "summary": {
                "id": 70142083,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6860/2036860.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6856/2036856.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6091/2036091.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6090/2036090.jpg"
                },
                "title": {
                    "title_short": "Mickey Mouse Clubhouse: Road Rally"
                }
            }
        },
        "70142436": {
            "summary": {
                "id": 70142436,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5367/2375367.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5363/2375363.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5981/2375981.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5980/2375980.jpg"
                },
                "title": {
                    "title_short": "Merlin",
                    "playback_title": "Merlin: Season 1: \"The Dragon's Call\""
                },
                "next_episode_id": 70135587
            }
        },
        "70142441": {
            "summary": {
                "id": 70142441,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8348/2768348.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8344/2768344.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/9960/2769960.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/9958/2769958.jpg"
                },
                "title": {
                    "title_short": "Doctor Who",
                    "playback_title": "Doctor Who: \"The End of Time: Part 1\""
                },
                "next_episode_id": 70150478
            }
        },
        "70143744": {
            "summary": {
                "id": 70143744,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3920/2243920.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3916/2243916.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/4493/2244493.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/4492/2244492.jpg"
                },
                "title": {
                    "title_short": "Bratz: Pampered Petz"
                }
            }
        },
        "70143809": {
            "summary": {
                "id": 70143809,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9326/1089326.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4401/814401.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8389/68389.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5716/55716.jpg"
                },
                "title": {
                    "title_short": "American Dad!",
                    "playback_title": "American Dad!: Season 1: \"Pilot\""
                },
                "next_episode_id": 70143469
            }
        },
        "70143810": {
            "summary": {
                "id": 70143810,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9327/1089327.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4402/814402.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8390/68390.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5717/55717.jpg"
                },
                "title": {
                    "title_short": "Burn Notice",
                    "playback_title": "Burn Notice: Season 1: \"Identity\""
                },
                "next_episode_id": 70217277
            }
        },
        "70143815": {
            "summary": {
                "id": 70143815,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7086/2327086.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7082/2327082.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8788/2328788.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8787/2328787.jpg"
                },
                "title": {
                    "title_short": "Aqua Teen Hunger Force",
                    "playback_title": "Aqua Teen Hunger Force: Season 1: \"Rabbot\""
                },
                "next_episode_id": 70267356
            }
        },
        "70143824": {
            "summary": {
                "id": 70143824,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4937/2174937.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4933/2174933.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5305/2175305.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5304/2175304.jpg"
                },
                "title": {
                    "title_short": "How I Met Your Mother",
                    "playback_title": "How I Met Your Mother: Season 3: \"We're Not From Here\""
                },
                "next_episode_id": 70218527
            }
        },
        "70143825": {
            "summary": {
                "id": 70143825,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1165/2031165.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1161/2031161.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3192/2033192.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3191/2033191.jpg"
                },
                "title": {
                    "title_short": "Supernatural",
                    "playback_title": "Supernatural: Season 1: \"Pilot\""
                },
                "next_episode_id": 70223017
            }
        },
        "70143827": {
            "summary": {
                "id": 70143827,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8510/1088510.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3665/813665.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8404/68404.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5733/55733.jpg"
                },
                "title": {
                    "title_short": "Eureka",
                    "playback_title": "Eureka: Season 1: \"Pilot\""
                },
                "next_episode_id": 70152293
            }
        },
        "70143836": {
            "summary": {
                "id": 70143836,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5906/2365906.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5902/2365902.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6500/2366500.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6499/2366499.jpg"
                },
                "title": {
                    "title_short": "Breaking Bad",
                    "playback_title": "Breaking Bad: Season 1: \"Pilot\""
                },
                "next_episode_id": 70196253
            }
        },
        "70143842": {
            "summary": {
                "id": 70143842,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6591/2646591.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6587/2646587.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6788/2646788.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6787/2646787.jpg"
                },
                "title": {
                    "title_short": "Parks and Recreation",
                    "playback_title": "Parks and Recreation: Season 1: \"Pilot\""
                },
                "next_episode_id": 70152006
            }
        },
        "70143855": {
            "summary": {
                "id": 70143855,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9363/1089363.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4438/814438.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8749/68749.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5151/55151.jpg"
                },
                "title": {
                    "title_short": "The Cleveland Show",
                    "playback_title": "The Cleveland Show: Season 1: \"Pilot\""
                },
                "next_episode_id": 70202288
            }
        },
        "70150438": {
            "summary": {
                "id": 70150438,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6886/2036886.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6882/2036882.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6109/2036109.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6108/2036108.jpg"
                },
                "title": {
                    "title_short": "Cars Toons: Mater's Tall Tales"
                }
            }
        },
        "70153380": {
            "summary": {
                "id": 70153380,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5149/2515149.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5145/2515145.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6214/2516214.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6213/2516213.jpg"
                },
                "title": {
                    "title_short": "Futurama",
                    "playback_title": "Futurama: Season 1: \"Space Pilot 3000\""
                },
                "next_episode_id": 70140692
            }
        },
        "70153382": {
            "summary": {
                "id": 70153382,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5818/2515818.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5814/2515814.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6259/2516259.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6258/2516258.jpg"
                },
                "title": {
                    "title_short": "Family Guy",
                    "playback_title": "Family Guy: Season 1: \"Death Has a Shadow\""
                },
                "next_episode_id": 70140564
            }
        },
        "70153386": {
            "summary": {
                "id": 70153386,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5172/2335172.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5168/2335168.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5980/2335980.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5979/2335979.jpg"
                },
                "title": {
                    "title_short": "The Venture Bros.",
                    "playback_title": "The Venture Bros.: Season 1: \"The Terrible Secret of Turtle Bay\""
                },
                "next_episode_id": 70266581
            }
        },
        "70153393": {
            "summary": {
                "id": 70153393,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9420/1089420.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4495/814495.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8043/68043.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5783/55783.jpg"
                },
                "title": {
                    "title_short": "Scrubs",
                    "playback_title": "Scrubs: Season 1: \"My First Day\""
                },
                "next_episode_id": 70160062
            }
        },
        "70153394": {
            "summary": {
                "id": 70153394,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8090/1088090.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3355/813355.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8044/68044.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5784/55784.jpg"
                },
                "title": {
                    "title_short": "Psych",
                    "playback_title": "Psych: Season 1: \"Pilot\""
                },
                "next_episode_id": 70152102
            }
        },
        "70153396": {
            "summary": {
                "id": 70153396,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3084/1803084.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3080/1803080.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/2957/1802957.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/2956/1802956.jpg"
                },
                "title": {
                    "title_short": "Fringe",
                    "playback_title": "Fringe: Season 1: \"Pilot\""
                },
                "next_episode_id": 70249107
            }
        },
        "70153408": {
            "summary": {
                "id": 70153408,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9433/1089433.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4508/814508.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8462/68462.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5189/55189.jpg"
                },
                "title": {
                    "title_short": "Twin Peaks",
                    "playback_title": "Twin Peaks: Season 1: \"Pilot\""
                },
                "next_episode_id": 70174188
            }
        },
        "70153850": {
            "summary": {
                "id": 70153850,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2396/1582396.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2392/1582392.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1751/1581751.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1750/1581750.jpg"
                },
                "title": {
                    "title_short": "Captain America: The First Avenger"
                }
            }
        },
        "70153859": {
            "summary": {
                "id": 70153859,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1481/2171481.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1477/2171477.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1631/2171631.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1630/2171630.jpg"
                },
                "title": {
                    "title_short": "Transformers: Dark of the Moon"
                }
            }
        },
        "70155160": {
            "summary": {
                "id": 70155160,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6823/2706823.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6819/2706819.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7164/2707164.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7163/2707163.jpg"
                },
                "title": {
                    "title_short": "Princess and the Pony"
                }
            }
        },
        "70155554": {
            "summary": {
                "id": 70155554,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7304/2327304.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7300/2327300.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9095/2339095.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/9094/2339094.jpg"
                },
                "title": {
                    "title_short": "Squidbillies",
                    "playback_title": "Squidbillies: Season 1: \"This Show Is Called Squidbillies\""
                },
                "next_episode_id": 70268555
            }
        },
        "70157152": {
            "summary": {
                "id": 70157152,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6114/2166114.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6110/2166110.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7326/2167326.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7325/2167325.jpg"
                },
                "title": {
                    "title_short": "The West Wing",
                    "playback_title": "The West Wing: Season 1: \"Pilot\""
                },
                "next_episode_id": 70262084
            }
        },
        "70157187": {
            "summary": {
                "id": 70157187,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9472/1089472.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4547/814547.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5763/1665763.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5762/1665762.jpg"
                },
                "title": {
                    "title_short": "The League",
                    "playback_title": "The League: Season 1: \"The Draft\""
                },
                "next_episode_id": 70176876
            }
        },
        "70157196": {
            "summary": {
                "id": 70157196,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3634/2413634.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3630/2413630.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3854/2413854.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3853/2413853.jpg"
                },
                "title": {
                    "title_short": "The Inbetweeners",
                    "playback_title": "The Inbetweeners: Season 1: \"First Day\""
                },
                "next_episode_id": 70223254
            }
        },
        "70157472": {
            "summary": {
                "id": 70157472,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9504/1089504.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4579/814579.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8582/68582.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5983/55983.jpg"
                },
                "title": {
                    "title_short": "Code Monkeys",
                    "playback_title": "Code Monkeys: Season 1: \"The Woz\""
                },
                "next_episode_id": 70150237
            }
        },
        "70158329": {
            "summary": {
                "id": 70158329,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6243/2456243.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6239/2456239.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6456/2456456.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6455/2456455.jpg"
                },
                "title": {
                    "title_short": "Star Trek: The Next Generation",
                    "playback_title": "Star Trek: The Next Generation: Season 1: \"The Last Outpost\""
                },
                "next_episode_id": 70177868
            }
        },
        "70158330": {
            "summary": {
                "id": 70158330,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3482/2463482.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3478/2463478.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6528/2456528.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6527/2456527.jpg"
                },
                "title": {
                    "title_short": "Star Trek: Deep Space Nine",
                    "playback_title": "Star Trek: Deep Space Nine: Season 1: \"Past Prologue\""
                },
                "next_episode_id": 70205810
            }
        },
        "70158331": {
            "summary": {
                "id": 70158331,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8941/1088941.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4008/814008.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8172/68172.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5356/55356.jpg"
                },
                "title": {
                    "title_short": "Star Trek: Voyager",
                    "playback_title": "Star Trek: Voyager: Season 1: \"Caretaker: Parts 1 & 2\""
                },
                "next_episode_id": 70178044
            }
        },
        "70158332": {
            "summary": {
                "id": 70158332,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3767/2463767.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3763/2463763.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6474/2456474.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6473/2456473.jpg"
                },
                "title": {
                    "title_short": "Star Trek: Enterprise",
                    "playback_title": "Star Trek: Enterprise: Season 1: \"Broken Bow: Part 1 & 2\""
                },
                "next_episode_id": 70177767
            }
        },
        "70166234": {
            "summary": {
                "id": 70166234,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8542/1088542.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3690/813690.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0474/70474.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7618/57618.jpg"
                },
                "title": {
                    "title_short": "Being Elmo: A Puppeteer's Journey"
                }
            }
        },
        "70171272": {
            "summary": {
                "id": 70171272,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7740/2097740.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7736/2097736.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8194/2098194.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8193/2098193.jpg"
                },
                "title": {
                    "title_short": "Summer Eleven"
                }
            }
        },
        "70171581": {
            "summary": {
                "id": 70171581,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2420/1582420.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2416/1582416.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1769/1581769.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1768/1581768.jpg"
                },
                "title": {
                    "title_short": "Super 8"
                }
            }
        },
        "70171934": {
            "summary": {
                "id": 70171934,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/0897/2200897.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0893/2200893.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1008/2201008.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1007/2201007.jpg"
                },
                "title": {
                    "title_short": "Running Wilde",
                    "playback_title": "Running Wilde: Season 1: \"Pilot: Wilde's Kingdom\""
                },
                "next_episode_id": 70153218
            }
        },
        "70171942": {
            "summary": {
                "id": 70171942,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0692/1090692.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5401/815401.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8732/68732.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5375/55375.jpg"
                },
                "title": {
                    "title_short": "Archer",
                    "playback_title": "Archer: Season 1: \"Training Day\""
                },
                "next_episode_id": 70138596
            }
        },
        "70171947": {
            "summary": {
                "id": 70171947,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6499/2376499.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6495/2376495.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7181/2377181.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7180/2377180.jpg"
                },
                "title": {
                    "title_short": "Scooby-Doo!: Mystery Incorporated",
                    "playback_title": "Scooby-Doo!: Mystery Incorporated: Season 1: \"Beware the Beast from Below\""
                },
                "next_episode_id": 70266612
            }
        },
        "70171960": {
            "summary": {
                "id": 70171960,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9773/2139773.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9769/2139769.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0582/2140582.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0581/2140581.jpg"
                },
                "title": {
                    "title_short": "Horseland",
                    "playback_title": "Horseland: Season 1: \"You Can't Judge a Girl By Her Limo\""
                },
                "next_episode_id": 70158186
            }
        },
        "70173048": {
            "summary": {
                "id": 70173048,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1035/2171035.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1031/2171031.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2232/2172232.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2231/2172231.jpg"
                },
                "title": {
                    "title_short": "Mission: Impossible - Ghost Protocol"
                }
            }
        },
        "70175666": {
            "summary": {
                "id": 70175666,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9875/2699875.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9871/2699871.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0249/2700249.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0248/2700248.jpg"
                },
                "title": {
                    "title_short": "Curious George",
                    "playback_title": "Curious George: Season 1: \"Flies a Kite / From Scratch\""
                },
                "next_episode_id": 70151043
            }
        },
        "70176984": {
            "summary": {
                "id": 70176984,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5704/2085704.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5700/2085700.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5791/2085791.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5790/2085790.jpg"
                },
                "title": {
                    "title_short": "Arthur",
                    "playback_title": "Arthur: Season 13: \"The Great MacGrady, Parts I and II\""
                },
                "next_episode_id": 70236789
            }
        },
        "70177007": {
            "summary": {
                "id": 70177007,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3072/2313072.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3068/2313068.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3782/2313782.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3781/2313781.jpg"
                },
                "title": {
                    "title_short": "Phineas and Ferb",
                    "playback_title": "Phineas and Ferb: Season 1: \"Rollercoaster / Candace Loses Her Head\""
                },
                "next_episode_id": 70170474
            }
        },
        "70177011": {
            "summary": {
                "id": 70177011,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9135/2139135.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9131/2139131.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/9184/2139184.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/9183/2139183.jpg"
                },
                "title": {
                    "title_short": "Strawberry Shortcake",
                    "playback_title": "Strawberry Shortcake: Season 1: \"Meet Strawberry Shortcake\""
                },
                "next_episode_id": 70157725
            }
        },
        "70177038": {
            "summary": {
                "id": 70177038,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6826/2376826.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6822/2376822.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7172/2377172.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7171/2377171.jpg"
                },
                "title": {
                    "title_short": "Batman Beyond",
                    "playback_title": "Batman Beyond: Season 1: \"Rebirth: Part 1\""
                },
                "next_episode_id": 70269318
            }
        },
        "70177043": {
            "summary": {
                "id": 70177043,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6608/2376608.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6604/2376604.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7190/2377190.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7189/2377189.jpg"
                },
                "title": {
                    "title_short": "Justice League",
                    "playback_title": "Justice League: Season 1: \"Secret Origins: Part 1\""
                },
                "next_episode_id": 70270620
            }
        },
        "70177044": {
            "summary": {
                "id": 70177044,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8931/2378931.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8927/2378927.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9059/2379059.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/9058/2379058.jpg"
                },
                "title": {
                    "title_short": "Justice League Unlimited",
                    "playback_title": "Justice League Unlimited: Season 1: \"Initiation\""
                },
                "next_episode_id": 70270568
            }
        },
        "70178215": {
            "summary": {
                "id": 70178215,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5179/2085179.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5175/2085175.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0737/2070737.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0736/2070736.jpg"
                },
                "title": {
                    "title_short": "The Avengers: Earth's Mightiest Heroes",
                    "playback_title": "The Avengers: Earth's Mightiest Heroes: Season 1: \"Iron Man Is Born!\""
                },
                "next_episode_id": 70176547
            }
        },
        "70178217": {
            "summary": {
                "id": 70178217,
                "is_original": true,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5114/2075114.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5110/2075110.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5968/2135968.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5967/2135967.jpg"
                },
                "title": {
                    "title_short": "House of Cards",
                    "playback_title": "House of Cards: Season 1: \"Chapter 1\""
                },
                "next_episode_id": 70248290
            }
        },
        "70179954": {
            "summary": {
                "id": 70179954,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5033/2375033.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5029/2375029.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5810/2375810.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5809/2375809.jpg"
                },
                "title": {
                    "title_short": "Alias",
                    "playback_title": "Alias: Season 1: \"Truth Be Told\""
                },
                "next_episode_id": 70219531
            }
        },
        "70179977": {
            "summary": {
                "id": 70179977,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1185/1091185.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5766/815766.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/9036/69036.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6177/56177.jpg"
                },
                "title": {
                    "title_short": "Louie",
                    "playback_title": "Louie: Season 1: \"Pilot\""
                },
                "next_episode_id": 70153446
            }
        },
        "70180051": {
            "summary": {
                "id": 70180051,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1257/1091257.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5866/815866.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8950/68950.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6144/56144.jpg"
                },
                "title": {
                    "title_short": "H2O: Just Add Water",
                    "playback_title": "H2O: Just Add Water: Season 1: \"Pool Party\""
                },
                "next_episode_id": 70116374
            }
        },
        "70180057": {
            "summary": {
                "id": 70180057,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6258/2546258.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6254/2546254.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6564/2546564.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6563/2546563.jpg"
                },
                "title": {
                    "title_short": "Pretty Little Liars",
                    "playback_title": "Pretty Little Liars: Season 1: \"Pilot\""
                },
                "next_episode_id": 70243181
            }
        },
        "70183164": {
            "summary": {
                "id": 70183164,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2432/1582432.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2428/1582428.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1778/1581778.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/1777/1581777.jpg"
                },
                "title": {
                    "title_short": "Abduction"
                }
            }
        },
        "70183165": {
            "summary": {
                "id": 70183165,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1907/1091907.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6216/816216.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0541/70541.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7682/57682.jpg"
                },
                "title": {
                    "title_short": "Judy Moody and the Not Bummer Summer"
                }
            }
        },
        "70185015": {
            "summary": {
                "id": 70185015,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1523/2371523.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1519/2371519.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1735/2371735.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1734/2371734.jpg"
                },
                "title": {
                    "title_short": "Portlandia",
                    "playback_title": "Portlandia: Season 1: \"A Song for Portland\""
                },
                "next_episode_id": 70222164
            }
        },
        "70185133": {
            "summary": {
                "id": 70185133,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/2207/1792207.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/2203/1792203.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6249/1596249.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6248/1596248.jpg"
                },
                "title": {
                    "title_short": "Wilfred",
                    "playback_title": "Wilfred: Season 1: \"Trust\""
                },
                "next_episode_id": 70245628
            }
        },
        "70189289": {
            "summary": {
                "id": 70189289,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1728/1291728.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/7909/1287909.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/4035/1274035.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1184/1271184.jpg"
                },
                "title": {
                    "title_short": "Drive"
                }
            }
        },
        "70196145": {
            "summary": {
                "id": 70196145,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0482/2690482.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/0476/2690476.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0870/2690870.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0869/2690869.jpg"
                },
                "title": {
                    "title_short": "New Girl",
                    "playback_title": "New Girl: Season 1: \"Pilot\""
                },
                "next_episode_id": 70276484
            }
        },
        "70199162": {
            "summary": {
                "id": 70199162,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5371/2065371.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5367/2065367.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/4933/2064933.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/4932/2064932.jpg"
                },
                "title": {
                    "title_short": "Frenemies"
                }
            }
        },
        "70202134": {
            "summary": {
                "id": 70202134,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7482/2437482.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7478/2437478.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/7500/2437500.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7499/2437499.jpg"
                },
                "title": {
                    "title_short": "Safe"
                }
            }
        },
        "70202589": {
            "summary": {
                "id": 70202589,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8853/2768853.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8847/2768847.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0034/2770034.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0032/2770032.jpg"
                },
                "title": {
                    "title_short": "Sherlock",
                    "playback_title": "Sherlock: Series 1: \"A Study in Pink\""
                },
                "next_episode_id": 70174780
            }
        },
        "70202753": {
            "summary": {
                "id": 70202753,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9775/1829775.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9771/1829771.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9153/69153.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6294/56294.jpg"
                },
                "title": {
                    "title_short": "Firefly",
                    "playback_title": "Firefly: The Complete Series: \"Serenity\""
                },
                "next_episode_id": 70133871
            }
        },
        "70205463": {
            "summary": {
                "id": 70205463,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8347/2248347.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8343/2248343.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8364/2248364.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8363/2248363.jpg"
                },
                "title": {
                    "title_short": "One for the Money"
                }
            }
        },
        "70206672": {
            "summary": {
                "id": 70206672,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1009/2171009.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1005/2171005.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/2167/2212167.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/2166/2212166.jpg"
                },
                "title": {
                    "title_short": "The Hunger Games"
                }
            }
        },
        "70208102": {
            "summary": {
                "id": 70208102,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5820/2095820.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5816/2095816.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5824/2095824.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5823/2095823.jpg"
                },
                "title": {
                    "title_short": "Dr. Seuss' The Lorax"
                }
            }
        },
        "70208258": {
            "summary": {
                "id": 70208258,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2792/2432792.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2788/2432788.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/3064/2433064.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/3063/2433063.jpg"
                },
                "title": {
                    "title_short": "Playing for Keeps"
                }
            }
        },
        "70209163": {
            "summary": {
                "id": 70209163,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/4914/1534914.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/4908/1534908.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2422/2442422.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2421/2442421.jpg"
                },
                "title": {
                    "title_short": "Goon"
                }
            }
        },
        "70210431": {
            "summary": {
                "id": 70210431,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/1431/2311431.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/1427/2311427.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1561/2311561.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1560/2311560.jpg"
                },
                "title": {
                    "title_short": "What to Expect When You're Expecting"
                }
            }
        },
        "70210883": {
            "summary": {
                "id": 70210883,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9209/2619209.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9205/2619205.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9379/2619379.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/9378/2619378.jpg"
                },
                "title": {
                    "title_short": "Hell on Wheels",
                    "playback_title": "Hell on Wheels: Season 1: \"Pilot\""
                },
                "next_episode_id": 70244972
            }
        },
        "70216972": {
            "summary": {
                "id": 70216972,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5838/1095838.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9339/819339.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0102/70102.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7243/57243.jpg"
                },
                "title": {
                    "title_short": "The Increasingly Poor Decisions of Todd...",
                    "playback_title": "The Increasingly Poor Decisions of Todd Margaret: Season 1: \"In Which Claims Are Made and a Journey Ensues\""
                },
                "next_episode_id": 70222157,
                "next_episode_uri": "http://api.netflix.com/catalog/titles/programs/260384/70222157"
            }
        },
        "70217140": {
            "summary": {
                "id": 70217140,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7674/1257674.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/7307/1247307.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9673/69673.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6814/56814.jpg"
                },
                "title": {
                    "title_short": "Peep Show",
                    "playback_title": "Peep Show: Series 1: \"Warring Factions\""
                },
                "next_episode_id": 70216233
            }
        },
        "70217913": {
            "summary": {
                "id": 70217913,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/0839/2520839.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0835/2520835.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0853/2520853.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0852/2520852.jpg"
                },
                "title": {
                    "title_short": "The Avengers"
                }
            }
        },
        "70217914": {
            "summary": {
                "id": 70217914,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6662/2306662.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6658/2306658.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6715/2306715.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6714/2306714.jpg"
                },
                "title": {
                    "title_short": "ParaNorman"
                }
            }
        },
        "70220281": {
            "summary": {
                "id": 70220281,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6952/2616952.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6948/2616948.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7229/2617229.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7228/2617228.jpg"
                },
                "title": {
                    "title_short": "Spaced",
                    "playback_title": "Spaced: Series 1: \"Beginnings\""
                },
                "next_episode_id": 70219719
            }
        },
        "70221094": {
            "summary": {
                "id": 70221094,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6175/1096175.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9619/819619.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9749/69749.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6890/56890.jpg"
                },
                "title": {
                    "title_short": "The Elephant Princess",
                    "playback_title": "The Elephant Princess: Series 1: \"Coming of Age\""
                },
                "next_episode_id": 70218190
            }
        },
        "70222359": {
            "summary": {
                "id": 70222359,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0588/2600588.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0581/2600581.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0741/2600741.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0739/2600739.jpg"
                },
                "title": {
                    "title_short": "Super Why!",
                    "playback_title": "\"Jack and the Beanstalk & Other Story Book Adventures: Jack and the Beanstalk\""
                },
                "next_episode_id": 70125194
            }
        },
        "70227946": {
            "summary": {
                "id": 70227946,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1244/2371244.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1240/2371240.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/1249/2371249.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1248/2371248.jpg"
                },
                "title": {
                    "title_short": "Safety Not Guaranteed"
                }
            }
        },
        "70228039": {
            "summary": {
                "id": 70228039,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0818/1560818.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/0814/1560814.jpg"
                },
                "title": {
                    "title_short": "Lockout"
                }
            }
        },
        "70228042": {
            "summary": {
                "id": 70228042,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5464/2435464.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5460/2435460.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7785/2427785.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7784/2427784.jpg"
                },
                "title": {
                    "title_short": "The Dictator"
                }
            }
        },
        "70228176": {
            "summary": {
                "id": 70228176,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/6136/2656136.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/6132/2656132.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6272/2656272.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6271/2656271.jpg"
                },
                "title": {
                    "title_short": "Fullmetal Alchemist: The Star of Milos"
                }
            }
        },
        "70228191": {
            "summary": {
                "id": 70228191,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/5438/2435438.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/5434/2435434.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5643/2435643.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5642/2435642.jpg"
                },
                "title": {
                    "title_short": "John Dies at the End"
                }
            }
        },
        "70230088": {
            "summary": {
                "id": 70230088,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7902/2547902.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7898/2547898.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5314/2545314.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5313/2545313.jpg"
                },
                "title": {
                    "title_short": "The Expendables 2"
                }
            }
        },
        "70231692": {
            "summary": {
                "id": 70231692,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2164/2412164.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2160/2412160.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2378/2412378.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2377/2412377.jpg"
                },
                "title": {
                    "title_short": "Classic Doctor Who",
                    "playback_title": "Doctor Who: The Aztecs: \"The Aztecs: Part 1\""
                },
                "next_episode_id": 70254423
            }
        },
        "70232039": {
            "summary": {
                "id": 70232039,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8294/2108294.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8290/2108290.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8333/2108333.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8332/2108332.jpg"
                },
                "title": {
                    "title_short": "Iron Sky"
                }
            }
        },
        "70234440": {
            "summary": {
                "id": 70234440,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/9582/2709582.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/9576/2709576.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0462/2710462.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0461/2710461.jpg"
                },
                "title": {
                    "title_short": "My Little Pony: Friendship Is Magic",
                    "playback_title": "My Little Pony: Friendship Is Magic: Season 1: \"The Ticket Master\""
                },
                "next_episode_id": 70233825
            }
        },
        "70235384": {
            "summary": {
                "id": 70235384,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0222/2310222.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/0218/2310218.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0248/2310248.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0247/2310247.jpg"
                },
                "title": {
                    "title_short": "End of Watch"
                }
            }
        },
        "70235796": {
            "summary": {
                "id": 70235796,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5345/2065345.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5341/2065341.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/4906/2064906.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/4905/2064905.jpg"
                },
                "title": {
                    "title_short": "Girl vs. Monster"
                }
            }
        },
        "70236741": {
            "summary": {
                "id": 70236741,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7054/2547054.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7050/2547050.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7295/2547295.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7294/2547294.jpg"
                },
                "title": {
                    "title_short": "Deadliest Tornadoes: Nova"
                }
            }
        },
        "70241454": {
            "summary": {
                "id": 70241454,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1978/2561978.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1974/2561974.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2196/2562196.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2195/2562195.jpg"
                },
                "title": {
                    "title_short": "Johnny Carson: King of Late Night"
                }
            }
        },
        "70242310": {
            "summary": {
                "id": 70242310,
                "is_original": true,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2952/2222952.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2948/2222948.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5866/2305866.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5865/2305865.jpg"
                },
                "title": {
                    "title_short": "Hemlock Grove",
                    "playback_title": "Hemlock Grove: Season 1: \"Jellyfish in the Sky\""
                },
                "next_episode_id": 70259382
            }
        },
        "70242311": {
            "summary": {
                "id": 70242311,
                "is_original": true,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1756/2521756.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1752/2521752.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7903/2527903.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7902/2527902.jpg"
                },
                "title": {
                    "title_short": "Orange Is the New Black",
                    "playback_title": "Orange Is the New Black: Season 1: \"I Wasn't Ready\""
                },
                "next_episode_id": 70259444
            }
        },
        "70242800": {
            "summary": {
                "id": 70242800,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8523/2428523.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8519/2428519.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8984/2428984.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8983/2428983.jpg"
                },
                "title": {
                    "title_short": "Madea's Witness Protection"
                }
            }
        },
        "70242963": {
            "summary": {
                "id": 70242963,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3725/2173725.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3721/2173721.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3843/2173843.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3842/2173842.jpg"
                },
                "title": {
                    "title_short": "Childrens Hospital",
                    "playback_title": "Childrens Hospital: Season 1: \"A Hospital Isn't a Place\""
                },
                "next_episode_id": 70269371
            }
        },
        "70244539": {
            "summary": {
                "id": 70244539,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3935/2293935.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3931/2293931.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3979/2293979.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3978/2293978.jpg"
                },
                "title": {
                    "title_short": "Beverly Hills Chihuahua 3: Viva La Fiesta!"
                }
            }
        },
        "70252883": {
            "summary": {
                "id": 70252883,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/0479/2290479.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/0475/2290475.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/0509/2290509.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/0508/2290508.jpg"
                },
                "title": {
                    "title_short": "Nitro Circus: The Movie"
                }
            }
        },
        "70253172": {
            "summary": {
                "id": 70253172,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8662/2428662.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8658/2428658.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8993/2428993.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8992/2428992.jpg"
                },
                "title": {
                    "title_short": "Copper",
                    "playback_title": "Copper: Season 1: \"Surviving Death\""
                },
                "next_episode_id": 70228357
            }
        },
        "70253798": {
            "summary": {
                "id": 70253798,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3285/1693285.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3281/1693281.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/4122/1694122.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/4121/1694121.jpg"
                },
                "title": {
                    "title_short": "Undeclared",
                    "playback_title": "Undeclared: The Complete Series: \"Prototype\""
                },
                "next_episode_id": 70253731
            }
        },
        "70258405": {
            "summary": {
                "id": 70258405,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8020/1888020.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8016/1888016.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8269/1888269.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8268/1888268.jpg"
                },
                "title": {
                    "title_short": "Jessie",
                    "playback_title": "Jessie: Season 1: \"New York, New Nanny\""
                },
                "next_episode_id": 70230336
            }
        },
        "70259680": {
            "summary": {
                "id": 70259680,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1820/2431820.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1816/2431816.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/2992/2432992.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/2991/2432991.jpg"
                },
                "title": {
                    "title_short": "Halo 4: Forward Unto Dawn"
                }
            }
        },
        "70264333": {
            "summary": {
                "id": 70264333,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9485/2049485.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9481/2049481.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/9535/2049535.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/9534/2049534.jpg"
                },
                "title": {
                    "title_short": "Secret of the Wings"
                }
            }
        },
        "70264612": {
            "summary": {
                "id": 70264612,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3172/2503172.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3168/2503168.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/3385/2503385.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/3384/2503384.jpg"
                },
                "title": {
                    "title_short": "The Magic School Bus",
                    "playback_title": "The Magic School Bus: Season 1: \"The Magic School Bus Gets Lost in Space\""
                },
                "next_episode_id": 70262645
            }
        },
        "70266352": {
            "summary": {
                "id": 70266352,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/8164/2428164.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/8160/2428160.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8264/2208264.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8263/2208263.jpg"
                },
                "title": {
                    "title_short": "Continuum",
                    "playback_title": "Continuum: Season 1: \"A Stitch In Time\""
                },
                "next_episode_id": 70269589
            }
        },
        "70268352": {
            "summary": {
                "id": 70268352,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/8285/2328285.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/8281/2328281.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/8995/2328995.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/8994/2328994.jpg"
                },
                "title": {
                    "title_short": "Courage the Cowardly Dog",
                    "playback_title": "Courage the Cowardly Dog: Season 1: \"A Night at the Katz Motel / Cajun Granny Stew\""
                },
                "next_episode_id": 70268323
            }
        },
        "70268448": {
            "summary": {
                "id": 70268448,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/5669/2325669.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/5665/2325665.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/8824/2328824.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/8823/2328823.jpg"
                },
                "title": {
                    "title_short": "Dexter's Laboratory",
                    "playback_title": "Dexter's Laboratory: Season 1: \"Dee-Deemensional / Magmanamus / Maternal Combat\""
                },
                "next_episode_id": 70268653
            }
        },
        "70269018": {
            "summary": {
                "id": 70269018,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6323/2326323.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6319/2326319.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/9058/2329058.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/9057/2329057.jpg"
                },
                "title": {
                    "title_short": "Powerpuff Girls",
                    "playback_title": "Powerpuff Girls: Season 1: \"Monkey See, Doggie Do / Mommy Fearest\""
                },
                "next_episode_id": 70268706
            }
        },
        "70270742": {
            "summary": {
                "id": 70270742,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6469/2756469.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6463/2756463.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7459/2757459.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/7457/2757457.jpg"
                },
                "title": {
                    "title_short": "TEDTalks: Life Hack",
                    "playback_title": "TEDTalks: Life Hack: \"Amy Cuddy: Your Body Language Shapes Who You Are\""
                },
                "next_episode_id": 70269122
            }
        },
        "70272742": {
            "summary": {
                "id": 70272742,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4919/2324919.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4915/2324915.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5091/2325091.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5090/2325090.jpg"
                },
                "title": {
                    "title_short": "Justin Time",
                    "playback_title": "Justin Time: Season 1: \"The Missing Mask / The Very Large Book of Pets\""
                },
                "next_episode_id": 70271792
            }
        },
        "70275375": {
            "summary": {
                "id": 70275375,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/0778/2450778.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/0774/2450774.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0990/2450990.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0989/2450989.jpg"
                },
                "title": {
                    "title_short": "Tron: Uprising",
                    "playback_title": "Tron: Uprising: Season 1: \"Beck's Beginning\""
                },
                "next_episode_id": 70275309
            }
        },
        "70275592": {
            "summary": {
                "id": 70275592,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3484/2533484.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3480/2533480.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/6121/2536121.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/6120/2536120.jpg"
                },
                "title": {
                    "title_short": "Masterpiece Classic: Great Expectations",
                    "playback_title": "Masterpiece Classic: Great Expectations: \"Episode 1\""
                },
                "next_episode_id": 70273773
            }
        },
        "70278879": {
            "summary": {
                "id": 70278879,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/2832/2532832.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/2828/2532828.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/6184/2536184.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/6183/2536183.jpg"
                },
                "title": {
                    "title_short": "Daniel Tiger's Neighborhood",
                    "playback_title": "Daniel Tiger's Neighborhood: Season 1: \"Daniel Visits School / Daniel Visits the Doctor\""
                },
                "next_episode_id": 70276829
            }
        },
        "70278880": {
            "summary": {
                "id": 70278880,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/3188/2533188.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/3184/2533184.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/5743/2535743.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/5742/2535742.jpg"
                },
                "title": {
                    "title_short": "Wild Kratts",
                    "playback_title": "Wild Kratts: Season 1: \"Mom of a Croc\""
                },
                "next_episode_id": 70276904
            }
        },
        "70279454": {
            "summary": {
                "id": 70279454,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/7106/2547106.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/7102/2547102.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7133/2547133.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7132/2547132.jpg"
                },
                "title": {
                    "title_short": "Nova: Hunting the Elements"
                }
            }
        },
        "70279456": {
            "summary": {
                "id": 70279456,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/6911/2546911.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/6907/2546907.jpg",
                    "665x375": "http://cdn1.nflximg.net/images/7241/2547241.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/7240/2547240.jpg"
                },
                "title": {
                    "title_short": "Nova: 3D Spies of WWII"
                }
            }
        },
        "70279458": {
            "summary": {
                "id": 70279458,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/4433/2534433.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/4429/2534429.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5644/2535644.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5643/2535643.jpg"
                },
                "title": {
                    "title_short": "Steve Jobs: One Last Thing"
                }
            }
        },
        "70280714": {
            "summary": {
                "id": 70280714,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn0.nflximg.net/images/1022/2611022.jpg",
                    "150x214": "http://cdn0.nflximg.net/images/1018/2611018.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/1358/2611358.jpg",
                    "350x197": "http://cdn0.nflximg.net/images/1356/2611356.jpg"
                },
                "title": {
                    "title_short": "Lab Rats",
                    "playback_title": "Lab Rats: Season 1: \"Crush, Chop & Burn: Pt. 1\""
                },
                "next_episode_id": 70279391
            }
        },
        "70281343": {
            "summary": {
                "id": 70281343,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/9919/2619919.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/9915/2619915.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/0048/2620048.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/0047/2620047.jpg"
                },
                "title": {
                    "title_short": "Mako Mermaids: An H2O Adventure",
                    "playback_title": "Mako Mermaids: An H2O Adventure: Season 1: \"Outcasts\""
                },
                "next_episode_id": 70275673
            }
        },
        "70281600": {
            "summary": {
                "id": 70281600,
                "is_series": true,
                "box_art": {
                    "284x405": "http://cdn1.nflximg.net/images/3619/2533619.jpg",
                    "150x214": "http://cdn1.nflximg.net/images/3615/2533615.jpg",
                    "665x375": "http://cdn0.nflximg.net/images/5932/2535932.jpg",
                    "350x197": "http://cdn1.nflximg.net/images/5931/2535931.jpg"
                },
                "title": {
                    "title_short": "Ken Burns: Prohibition",
                    "playback_title": "Ken Burns: Prohibition: \"A Nation of Drunkards\""
                },
                "next_episode_id": 70277770
            }
        }
    }
    };

    return {
        getModel: function () {
            if (!modelInstance) {
                modelInstance = createInstance();
            }
            return modelInstance;
        }
    };
}());