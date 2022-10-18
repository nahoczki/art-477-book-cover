
const circleSizes = {
    0: {
        height: 35,
        width: 0.5
    },
    1: {
        height: 20,
        width: 0.7
    },
    2: {
        height: 40,
        width: 1
    },
    3: {
        height: 90,
        width: 1.25
    },
}

const generateTopLines = () => {
    for (let i = 0; i < 13; i++) {
        let line = document.createElement('div');
        $(line).addClass('top-line')

        $('.top-lines').append(line)
    }

    $('.top-line').each(function(i) {
        $(this)
            .css('height', 8 - i*0.55)
            .css('margin-bottom', 3 + i*0.75)
            .css('transform', `translateZ(${i * -.25 + 3}rem)`)
    })
}

const generateAuthorStupidGoal = () => {

    for (let i = 0; i < 9; i++) {
        let text = document.createElement('span');
        $(text).addClass('author-text')
        text.innerHTML = 'Author of <i>Arbitrary Stupid Goal</i>'

        $('#author-text-texts').append(text)
    }

    $('.author-text').each(function (i) {
        $(this)
            .css('font-size', 16 - i*1.5)
            .css('margin-bottom', 3 + i*0.75)
            .css('transform', `translateZ(${i * -.5 + 3}rem)`)
    })
}

const generateCircles = () => {
    $('.circle').each(function (circle) {
        for (let i = 1; i <= 12; i++) {

            console.log(7.5 * i)

            let line = document.createElement('div');
            line.className = 'circle-line'
            $(line)
                .css('position', 'absolute')
                .css('background', 'black')
                .css('width', `${circleSizes[circle].width}px`)
                .css('height', `${circleSizes[circle].height}px`)
                .css('left', '40px')
                .css('transform', `rotate(${15 * i}deg) translateZ(${i * 0.1}rem)`)
            $(this).append(line)
        }
    })
}

const generateSlightlyAngledLines = () => {
    let container = $('.slightly-angled-lines')
    for (let i = 0; i < 25; i++) {
        let line = document.createElement('div');
        $(line).addClass('slightly-angled-line')

        container.append(line)
    }
}

const generateGradientBoxes = () => {
    for (let i = 0; i < 10; i++) {
        let box = document.createElement('div')
        $(box).addClass('gradient-box')

        $('.gradient-boxes').append(box)
    }
    
    $('.gradient-box').each(function (i) {
        $(this)
            .css('opacity', `${(-90 + 10*i) + 100}%`)
            .css('transform', `translateZ(${i * .5}rem)`)
    })
}

const generateVerticalLines = () => {
    let vertLinesDiv = $('.vertical-lines')

    for (let i = 0; i < 31; i++) {
        let line = document.createElement('div');
        $(line)
            .css('background', 'black')
            .css('width', `1px`)
            .css('height', `${70 + i}px`)
            .css('transform', `translateZ(${i * 0.05}rem)`)

        vertLinesDiv.append(line)
    }

}

$(document).ready(function() {
    generateTopLines();
    generateAuthorStupidGoal();
    generateCircles();
    generateGradientBoxes();
    generateVerticalLines();
    generateSlightlyAngledLines();
});