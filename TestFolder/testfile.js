module.exports = {
    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after : browser => {
        browser.end()
    },

    
    
    'Second Test' : browser => {
        browser
            .setValue('input[name="hdrInput"]', "Header Tester")
            .setValue('input[name="mkeInput"]', "MKE")
            .setValue('input[name="oriInput"]', "123456789")
            .setValue('input[name="namInput"]', "Jake Barrett")
            .setValue('input[name="sexInput"]', "M")
            .setValue('input[name="racInput"]', "W")
            .setValue('input[name="hgtInput"]', "510")
            .verify.value('input[name="hgtInput"]', "510")
            .setValue('input[name="wgtInput"]', "150")
            .verify.value('input[name="wgtInput"]', "150")
            .setValue('input[name="haiInput"]', "Black")
            .verify.value('input[name="haiInput"]', "Black")
            .setValue('input[name="offInput"]', "Speeding")
            .setValue('input[name="dowInput"]', "09021990")
            .click('#saveBtn')
            .verify.containsText('span[name="queryBody"]','Header Tester.MKE.123456789.Jake Barrett.M.W.510.150.Black.Speeding.09021990......')
        
            
    
    }











}