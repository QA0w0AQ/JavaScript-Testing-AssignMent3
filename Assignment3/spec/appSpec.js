describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click()  
      expect(document.querySelector('#counter').textContent).toBe('120')
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(document.querySelector('#click-me')).not.toBe(true)
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(2)).toEqual(2)
      expect(factorial(3)).toEqual(6)
      expect(factorial(4)).toEqual(24)
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(0)).toEqual(1)
      expect(factorial(-10)).toEqual(1)
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
      const computer = new Computer()
      expect(computer.hardDriveSpace).toEqual(512)
    })

    describe("installProgram", () => {
     const computer = new Computer()
      
     describe("canInstall",function(){
      beforeEach(function(done){
        computer.installProgram(256,function(){
          done();
        })
      })
      it("can install a program if there is sufficient space", () => {
       expect(computer.hardDriveSpace).toEqual(256)
      })
     })
     
     describe("canNotInstall", function(){
      beforeEach(function(done){
        computer.installProgram(512,function(){
          done();
        })
      })
      it("will not install the program if there is insufficient space", () => {
        expect(computer.hardDriveSpace).toEqual(256)
      })
    })

     })
      
      
    describe("format", () => {
      const computer = new Computer()
      beforeEach(function(done){
        computer.installProgram(511,function(){
          done();
        })
      })
      it("resets the hard drive to 512, even after programs have been installed", () => {
        computer.format();   
        expect(computer.hardDriveSpace).toEqual(512)
      });
    })

  })

})