//!beforeAll
// import {test} from "@playwright/test"

// test.beforeAll("1st", async()=>{
//     console.log("before all");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })

//!beforeEach
// import {test} from "@playwright/test"

// test.beforeEach("1st", async()=>{
//     console.log("before each");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })


//!afterAll
// import {test} from "@playwright/test"

// test.afterAll("1st", async()=>{
//     console.log("after all");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })



//!afterEach
import {test} from "@playwright/test"

test.afterEach("1st", async()=>{
    console.log("after each");
    
})

test("2nd", async()=>{

    console.log("t1");
    
})

test("3rd", async()=>{

    console.log("t2");
    
})