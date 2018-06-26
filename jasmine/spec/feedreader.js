/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */
$(
  (function() {
    //this test suite checks allfeeds variable is defined and does it contain elements inside
    describe("RSS Feeds", function() {
      it("are defined", function() {
        //expecting allFeeds variable to be defined
        expect(allFeeds).toBeDefined();
        //expecting allFeeds variable containing at least 1 element inside
        expect(allFeeds.length).not.toBe(0);
      });

      //looping throug each element in allFeeds array, to check whether url is defined and it is not empty
      it("has URL defined and it is not empty", function() {
        allFeeds.forEach((element, i) => {
          expect(element.url).toBeDefined("url is not defined at index " + i);
          expect(element.url).not.toEqual("", "url is empty at index " + i);
        });
      });

      //looping throug each element in allFeeds array, to check whether name is defined and it is not empty
      it("has name defined and it is not empty", function() {
        allFeeds.forEach((element, i) => {
          expect(element.name).toBeDefined("name is not defined at index " + i);
          expect(element.name).not.toEqual("", "name is empty at index " + i);
        });
      });
    });

    //tests the menu for visibilty behavior
    describe("The menu", function() {
      const btn = $(".menu-icon-link");
      //checking btn for class menu-hidden which makes it hidden by default
      it("is hidden by default", function() {
        expect($("body").hasClass("menu-hidden")).toBeTruthy(
          "by default it is not hidden"
        );
      });

      //testing for visibilty after a click on the btn
      it("changes visibility when menu icon is clicked", function() {
        btn.click();
        expect($("body").hasClass("menu-hidden")).toBeFalsy(
          "it is still hidden when menu icon clicked"
        );
        btn.click();
        expect($("body").hasClass("menu-hidden")).toBeTruthy(
          "it is still visible when muni icon clicked"
        );
      });
    });

    //tests loadFeed function. It checks whether feed loaded to container correctly
    describe("Iniitial Entries", function() {
      //before running every test we should update the feed and wait for until it finishes to download
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      //testing for wheter the feed container loaded with at least one element
      it("loads feed container at least with one element", function(done) {
        expect($(".feed > .entry-link").length).toBeGreaterThan(
          0,
          "error on loading feed"
        );
        done();
      });
    });

    //tests loadFeed function. It checks whether feed loaded with new elements when other feed is selected
    describe("New Feed Selection", function() {
      //declaring variables for holding old and new feed element values. In test spec we will compare this values to know wheter the feed updated
      let firstString;
      let secondString;

      //before each test load the feed and assign first element to firstString variable then immediatly update the feed
      beforeEach(function(done) {
        loadFeed(0, function() {
          firstString = $(".feed").html();
          loadFeed(1, done);
        });
      });

      //compare firstString with new element(secondString), if the feed content changed they must not be equal
      it("is loaded and content actually changed", function(done) {
        secondString = $(".feed").html();
        expect(secondString).not.toBe(
          firstString,
          "is not loaded or content not changed"
        );
        done();
      });
    });
  })()
);
