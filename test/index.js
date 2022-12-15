const chai = require('chai')
const chaiHttp = require('chai-http')
const fs = require('fs')
const expect = chai.expect
const app = require('../app')

chai.use(chaiHttp)

describe('API ENDPOINT TESTING', () => {
    it('GET Landing Page', (done) => {
        chai.request(app).get('/api/v1/member/landing-page').end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('Object')
            expect(res.body).to.have.property('hero')
            expect(res.body.hero).to.have.all.keys('travelers', 'treasures', 'cities')
            expect(res.body).to.have.property('mostPicked')
            expect(res.body.mostPicked).to.have.an('array')
            expect(res.body).to.have.property('category')
            expect(res.body.category).to.have.an('array')
            expect(res.body).to.have.property('testimonial')
            expect(res.body.testimonial).to.have.an('object')
            done();
        })
    })

    it('GET Detail Page', (done) => {
        chai.request(app).get('/api/v1/member/detail-page/5e96cbe292b97300fc902233').end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('Object')
            expect(res.body).to.have.property('country')
            expect(res.body).to.have.property('isPopular')
            expect(res.body).to.have.property('sumBooking')
            expect(res.body).to.have.property('imageId')
            expect(res.body.imageId).to.have.an('array')
            expect(res.body).to.have.property('featureId')
            expect(res.body.featureId).to.have.an('array')
            expect(res.body).to.have.property('activityId')
            expect(res.body.activityId).to.have.an('array')
            expect(res.body).to.have.property('bank')
            expect(res.body.bank).to.have.an('array')
            expect(res.body).to.have.property('testimonial')
            expect(res.body.testimonial).to.have.an('object')
            done();
        })
    })

    it('GET Booking Page', (done) => {
        const image = __dirname + '/buktibayar.jpeg'
        const dataSample = {
                idItem: '5e96cbe292b97300fc902233',
                duration: 2,
                bookingStartDate: '02-03-2021',
                bookingEndDate: '04-03-2021',
                firstName: 'Ragnala',
                lastName: 'Cleopatri',
                email: 'ragnala@gmail.com',
                phoneNumber: '0893245242',
                accountHolder: 'Ragnala',
                bankFrom: 'BNI',
                image
        }
        chai.request(app).post('/api/v1/member/booking-page')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .field('idItem', dataSample.idItem)
        .field('duration', dataSample.duration)
        .field('bookingStartDate', dataSample.bookingStartDate)
        .field('bookingEndDate', dataSample.bookingEndDate)
        .field('firstName', dataSample.firstName)
        .field('lastName', dataSample.lastName)
        .field('email', dataSample.email)
        .field('phoneNumber', dataSample.phoneNumber)
        .field('accountHolder', dataSample.accountHolder)
        .field('bankFrom', dataSample.bankFrom)
        .attach('image', fs.readFileSync(dataSample.image), 'buktibayar.jpeg')
        .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('Object')
            expect(res.body).to.have.property('message')
            expect(res.body.message).to.equal('Success Booking!')
            done();
        })
    })
})