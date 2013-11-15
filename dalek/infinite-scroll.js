module.exports = {
  name: 'infinite scroll',

  'should load data when scrolling to bottom of element': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    //not sure how to scroll within the testing framework so using javascript
    .execute(function() {
      $('.content').scrollTop(1000);
    })
    .wait(500)
      .assert.exists('.infinite-scroll-content', 'content loaded from infinite scroll function')
    .done();
  }
}