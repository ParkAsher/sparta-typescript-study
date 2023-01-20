// 크롤링 하기위한 모듈
const puppeteer = require('puppeteer');

// 파일시스템 모듈
const fs = require('fs');

async function scrape() {
    try {
        // 크로미움 브라우저 열기
        const browser = await puppeteer.launch();

        // 페이지 열기
        const page = await browser.newPage();

        // 링크 이동
        await page.goto('http://127.0.0.1:5500/3rd-day-pokemon');

        // .card 엘리먼트중에 값이 #100인 .card--id 엘리먼트가 생길 때 까지 기다림
        await page.waitForFunction(
            () => document.querySelector('.card:last-child .card--id').textContent === '#100',
            { timeout: 10000 }
        );

        // cards 에 모든 카드정보 배열로 저장
        const cards = await page.$$('.card');

        // 확인
        console.log(cards.length);

        // cards 배열 돌면서 데이터 수집
        // data 배열에 등록
        const data = [];
        for (const card of cards) {
            const id = await card.$eval('.card--id', (element) => element.textContent);
            const image = await card.$eval('.card--image', (element) =>
                element.getAttribute('src')
            );
            const name = await card.$eval('.card--name', (element) => element.textContent);
            const details = await card.$eval('.card--details', (element) => element.textContent);

            data.push({ id, image, name, details });
        }

        // 페이지와 브라우저 종료
        await page.close();
        await browser.close();

        return data;
    } catch (error) {
        console.log(error);
    }
}

scrape()
    .then((data) => {
        fs.writeFile('pokemon.json', JSON.stringify(data), 'utf-8', (error) => {
            if (error) {
                console.log('파일 생성 중 에러 발생.');
                return console.log(error);
            }
        });
    })
    .catch((error) => {
        console.log(error);
    });
