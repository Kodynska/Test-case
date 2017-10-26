module.exports = {
'Test ria': function(browser) {

browser
.url('https://auto.ria.com/', () => {
console.log('Loading auto.ria...');
})
.waitForElementVisible('.search__main .e-form', 5000)
.execute(function() {
document.getElementById('text').value = 'Test';
})
.end();
} 
};