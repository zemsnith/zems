document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var students = [
        {
            class: 1,
            roll: 1,
            name: formData.get('name1'),
            math: formData.get('math1'),
            science: formData.get('science1'),
            nepali: formData.get('nepali1'),
            social: formData.get('social1'),
            english: formData.get('english1'),
            gk: formData.get('gk1'),
            kerabari: formData('kerabari1')
        },
        {
            class: 1,
            roll: 2,
            name: formData.get('name2'),
            math: formData.get('math2'),
            science: formData.get('science2'),
            nepali: formData.get('nepali2'),
            social: formData.get('social2'),
            english: formData.get('english2'),
            gk: formData.get('gk2'),
            kerabari: formData('kerabari2')
        },
        {
            class: 1,
            roll: 3,
            name: formData.get('name3'),
            math: formData.get('math3'),
            science: formData.get('science3'),
            nepali: formData.get('nepali3'),
            social: formData.get('social3'),
            english: formData.get('english3'),
            gk: formData.get('gk3'),
            kerabari: formData('kerabari3')
        },
        {
            class: 1,
            roll: 4,
            name: formData.get('name4'),
            math: formData.get('math4'),
            science: formData.get('science4'),
            nepali: formData.get('nepali4'),
            social: formData.get('social4'),
            english: formData.get('english4'),
            gk: formData.get('gk4'),
            kerabari: formData('kerabari4')
        },
        {
            class: 1,
            roll: 5,
            name: formData.get('name5'),
            math: formData.get('math5'),
            science: formData.get('science5'),
            nepali: formData.get('nepali5'),
            social: formData.get('social5'),
            english: formData.get('english5'),
            gk: formData.get('gk5'),
            kerabari: formData('kerabari5')
        },
        {
            class: 1,
            roll: 6,
            name: formData.get('name6'),
            math: formData.get('math6'),
            science: formData.get('science6'),
            nepali: formData.get('nepali6'),
            social: formData.get('social6'),
            english: formData.get('english6'),
            gk: formData.get('gk6'),
            kerabari: formData('kerabari6')
        },
        {
            class: 1,
            roll: 7,
            name: formData.get('name7'),
            math: formData.get('math7'),
            science: formData.get('science7'),
            nepali: formData.get('nepali7'),
            social: formData.get('social7'),
            english: formData.get('english7'),
            gk: formData.get('gk7'),
            kerabari: formData('kerabari7')
        },
        {
            class: 1,
            roll: 8,
            name: formData.get('name8'),
            math: formData.get('math8'),
            science: formData.get('science8'),
            nepali: formData.get('nepali8'),
            social: formData.get('social8'),
            english: formData.get('english8'),
            gk: formData.get('gk8'),
            kerabari: formData('kerabari8')
        },
        {
            class: 1,
            roll: 9,
            name: formData.get('name9'),
            math: formData.get('math9'),
            science: formData.get('science9'),
            nepali: formData.get('nepali9'),
            social: formData.get('social9'),
            english: formData.get('english9'),
            gk: formData.get('gk9'),
            kerabari: formData('kerabari9')
        },
        {
            class: 1,
            roll: 10,
            name: formData.get('name10'),
            math: formData.get('math10'),
            science: formData.get('science10'),
            nepali: formData.get('nepali10'),
            social: formData.get('social10'),
            english: formData.get('english10'),
            gk: formData.get('gk10'),
            kerabari: formData('kerabari10')
        },
        {
            class: 1,
            roll: 11,
            name: formData.get('name11'),
            math: formData.get('math11'),
            science: formData.get('science11'),
            nepali: formData.get('nepali11'),
            social: formData.get('social11'),
            english: formData.get('english11'),
            gk: formData.get('gk11'),
            kerabari: formData('kerabari11')
        },
        {
            class: 1,
            roll: 12,
            name: formData.get('name12'),
            math: formData.get('math12'),
            science: formData.get('science12'),
            nepali: formData.get('nepali12'),
            social: formData.get('social12'),
            english: formData.get('english12'),
            gk: formData.get('gk12'),
            kerabari: formData('kerabari12')
        },
        {
            class: 1,
            roll: 13,
            name: formData.get('name13'),
            math: formData.get('math13'),
            science: formData.get('science13'),
            nepali: formData.get('nepali13'),
            social: formData.get('social13'),
            english: formData.get('english13'),
            gk: formData.get('gk13'),
            kerabari: formData('kerabari13')
        },
        {
            class: 1,
            roll: 14,
            name: formData.get('name14'),
            math: formData.get('math14'),
            science: formData.get('science14'),
            nepali: formData.get('nepali14'),
            social: formData.get('social14'),
            english: formData.get('english14'),
            gk: formData.get('gk14'),
            kerabari: formData('kerabari14')
        },
        {
            class: 1,
            roll: 15,
            name: formData.get('name15'),
            math: formData.get('math15'),
            science: formData.get('science15'),
            nepali: formData.get('nepali15'),
            social: formData.get('social15'),
            english: formData.get('english15'),
            gk: formData.get('gk15'),
            kerabari: formData('kerabari15')
        },
        {
            class: 1,
            roll: 16,
            name: formData.get('name16'),
            math: formData.get('math16'),
            science: formData.get('science16'),
            nepali: formData.get('nepali16'),
            social: formData.get('social16'),
            english: formData.get('english16'),
            gk: formData.get('gk16'),
            kerabari: formData('kerabari16')
        },
        {
            class: 1,
            roll: 17,
            name: formData.get('name17'),
            math: formData.get('math17'),
            science: formData.get('science17'),
            nepali: formData.get('nepali17'),
            social: formData.get('social17'),
            english: formData.get('english17'),
            gk: formData.get('gk17'),
            kerabari: formData('kerabari17')
        },
        {
            class: 1,
            roll: 18,
            name: formData.get('name18'),
            math: formData.get('math18'),
            science: formData.get('science18'),
            nepali: formData.get('nepali18'),
            social: formData.get('social18'),
            english: formData.get('english18'),
            gk: formData.get('gk18'),
            kerabari: formData('kerabari18')
        },
        {
            class: 1,
            roll: 19,
            name: formData.get('name19'),
            math: formData.get('math19'),
            science: formData.get('science19'),
            nepali: formData.get('nepali19'),
            social: formData.get('social19'),
            english: formData.get('english19'),
            gk: formData.get('gk19'),
            kerabari: formData('kerabari19')
        },
        {
            class: 1,
            roll: 20,
            name: formData.get('name20'),
            math: formData.get('math20'),
            science: formData.get('science20'),
            nepali: formData.get('nepali20'),
            social: formData.get('social20'),
            english: formData.get('english20'),
            gk: formData.get('gk20'),
            kerabari: formData('kerabari20')
        },
        {
            class: 1,
            roll: 21,
            name: formData.get('name21'),
            math: formData.get('math21'),
            science: formData.get('science21'),
            nepali: formData.get('nepali21'),
            social: formData.get('social21'),
            english: formData.get('english21'),
            gk: formData.get('gk21'),
            kerabari: formData('kerabari21')
        },
        {
            class: 1,
            roll: 22,
            name: formData.get('name22'),
            math: formData.get('math22'),
            science: formData.get('science22'),
            nepali: formData.get('nepali22'),
            social: formData.get('social22'),
            english: formData.get('english22'),
            gk: formData.get('gk22'),
            kerabari: formData('kerabari22')
        },
        {
            class: 1,
            roll: 23,
            name: formData.get('name23'),
            math: formData.get('math23'),
            science: formData.get('science23'),
            nepali: formData.get('nepali23'),
            social: formData.get('social23'),
            english: formData.get('english23'),
            gk: formData.get('gk23'),
            kerabari: formData('kerabari23')
        },
        {
            class: 1,
            roll: 24,
            name: formData.get('name24'),
            math: formData.get('math24'),
            science: formData.get('science24'),
            nepali: formData.get('nepali24'),
            social: formData.get('social24'),
            english: formData.get('english24'),
            gk: formData.get('gk24'),
            kerabari: formData('kerabari24')
        },
        {
            class: 1,
            roll: 25,
            name: formData.get('name25'),
            math: formData.get('math25'),
            science: formData.get('science25'),
            nepali: formData.get('nepali25'),
            social: formData.get('social25'),
            english: formData.get('english25'),
            gk: formData.get('gk25'),
            kerabari: formData('kerabari25')
        },
        {
            class: 1,
            roll: 26,
            name: formData.get('name26'),
            math: formData.get('math26'),
            science: formData.get('science26'),
            nepali: formData.get('nepali26'),
            social: formData.get('social26'),
            english: formData.get('english26'),
            gk: formData.get('gk26'),
            kerabari: formData('kerabari26')
        },
        {
            class: 1,
            roll: 27,
            name: formData.get('name27'),
            math: formData.get('math27'),
            science: formData.get('science27'),
            nepali: formData.get('nepali27'),
            social: formData.get('social27'),
            english: formData.get('english27'),
            gk: formData.get('gk27'),
            kerabari: formData('kerabari27')
        },
        {
            class: 1,
            roll: 28,
            name: formData.get('name28'),
            math: formData.get('math28'),
            science: formData.get('science28'),
            nepali: formData.get('nepali28'),
            social: formData.get('social28'),
            english: formData.get('english28'),
            gk: formData.get('gk28'),
            kerabari: formData('kerabari28')
        },
        {
            class: 1,
            roll: 29,
            name: formData.get('name29'),
            math: formData.get('math29'),
            science: formData.get('science29'),
            nepali: formData.get('nepali29'),
            social: formData.get('social29'),
            english: formData.get('english29'),
            gk: formData.get('gk29'),
            kerabari: formData('kerabari29')
        },
        {
            class: 1,
            roll: 30,
            name: formData.get('name30'),
            math: formData.get('math30'),
            science: formData.get('science30'),
            nepali: formData.get('nepali30'),
            social: formData.get('social30'),
            english: formData.get('english30'),
            gk: formData.get('gk30'),
            kerabari: formData('kerabari30')
        },
        {
            class: 1,
            roll: 31,
            name: formData.get('name31'),
            math: formData.get('math31'),
            science: formData.get('science31'),
            nepali: formData.get('nepali31'),
            social: formData.get('social31'),
            english: formData.get('english31'),
            gk: formData.get('gk31'),
            kerabari: formData('kerabari31')
        },
        {
            class: 1,
            roll: 32,
            name: formData.get('name32'),
            math: formData.get('math32'),
            science: formData.get('science32'),
            nepali: formData.get('nepali32'),
            social: formData.get('social32'),
            english: formData.get('english32'),
            gk: formData.get('gk32'),
            kerabari: formData('kerabari32')
        },
        {
            class: 1,
            roll: 33,
            name: formData.get('name33'),
            math: formData.get('math33'),
            science: formData.get('science33'),
            nepali: formData.get('nepali33'),
            social: formData.get('social33'),
            english: formData.get('english33'),
            gk: formData.get('gk33'),
            kerabari: formData('kerabari33')
        },
        {
            class: 1,
            roll: 34,
            name: formData.get('name34'),
            math: formData.get('math34'),
            science: formData.get('science34'),
            nepali: formData.get('nepali34'),
            social: formData.get('social34'),
            english: formData.get('english34'),
            gk: formData.get('gk34'),
            kerabari: formData('kerabari34')
        }

    ];
    
    fetch('YOUR_GOOGLE_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(students),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        this.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});