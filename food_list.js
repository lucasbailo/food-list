
let healthy = []
let unhealhty = []

let answer = ""
let end = ""
//var printing = ""


// Looping

while (answer != "N" && end != "N") {
    var food = prompt('Type the name of the food that you want to add on the list: ')
    var option = prompt('Is it healy or unhealthy? Type [H] or [U]').toUpperCase()

    // if it's Healthy add the item to the Healthy list

    if (option === "H") {
        healthy.push(food)
    }

    // if it's Unhealthy add the item to the Unhealthy list

    else if (option === "U") {
        unhealhty.push(food)
    }

    // if user didn't Type a existing option 

    else {
        var option = prompt("That's not an option!! Is it healy or unhealthy? Type [H] or [U]")
    }

    // Here we can divide by the type of food to set the list that it's going to go

    let answer = prompt('Do you want to continue? Yes or No? [Y/N]').toUpperCase()

    if (answer === "N") {
        alert("Healthy food: " + healthy)
        alert("Unhealthy food: " + unhealhty)

        
        // Looping of pop items or end the entire loop  
        
        var popout = ""
        
        while (popout != "N" && end != "N") {
            
            var popout = prompt("Do you want to delete some item of your list? [Y/N] ?").toUpperCase()

            if (popout === "N") {
                
                // if NO: print all the items

                alert("Healthy food: " + healthy)
                alert("Unhealthy food: " + unhealhty)

                break
            }

            // if YES: Ask which item will be removed

            else if (popout === "Y") {
                var whichone = prompt("Which item do you want to remove from your list?")

                if (healthy.includes(whichone)) {
                    healthy.splice(healthy.indexOf(whichone), 1)
                    alert("New List of Healthy food: " + healthy)
                }

                else if (unhealhty.includes(whichone)) {
                    unhealhty.splice(unhealhty.indexOf(whichone),1)
                    alert("New List of Unhealthy food: " + unhealhty)
                }

                else {
                    alert("This item is not on your lists!")
                }

            }

            let end = prompt("Do you want to end Everything? [Y/N]?").toUpperCase()

            if (end === "Y") {

                alert("Final list of Healthy food: " + healthy)
                alert("Final list of Unhealthy food: " + unhealhty)
                break
            }
            
        }

        break
    }
}

    //else (answer != "N" && answer != "Y") {
        //let answer = prompt('Type Only [Y/N]! Do you want to continue? Yes or No? [Y/N]').toUpperCase()
    //}

