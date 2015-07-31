var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.get('/courses/:id', function(req, res) {
    var courseId = parseInt(req.params.id);
    var data = {};
    for (var i=0, len=courses.length;i<len;i++) {
        if (courses[i].id === courseId) {
            data = courses[i];
            break;
        }
    }
    res.json(data);
});


app.get('/courses', function(req, res) {
    res.json(courses);
});

app.listen(4000);

console.log('Express listening on port 4000');

        var courses = [
            {
                id: 1,
                name:'Model Thinking',
                school:'University of Michigan',
                projects:  [
                    {
                        id: 1,
                        name: 'Class Notes'
                    }
                ]
            },
            {
                id: 2,
                name:'Data Visualization',
                school:'University of Illinois at Urbana-Champaign',
                projects:  [
                    {
                        id: 1,
                        name: 'Class Notes'
                    }
                ]
            },
            {
                id: 3,
                name: 'Interactive Programming in Python',
                school:'Rice University',
                projects:  [
                    {
                        id: 1,
                        name: 'Class Notes'
                    }
                ]
            },
            {
                id: 4,
                name: 'Algorithms Design and Analysis',
                school: 'Stanford University',
                projects:  [
                    {
                        id: 1,
                        name: 'Class Notes'
                    },
                    {
                        id: 2,
                        name: 'Quick Sort with Different Pviots'
                    }
                ]
            },
            {
                id: 5,
                name: 'AngularJS JumpStart',
                school: 'Udemy',
                projects:  [
                    {
                        id: 1,
                        name: 'Class Notes'
                    },
                    {
                        id: 2,
                        name: 'My Courses Page'
                    }
                ]
            }
        ];
