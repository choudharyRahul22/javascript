// BUDGET CONTROLLER
var budgetController = (function(){
    
        var Expense = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;
        };
        
        
        var Income = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;
        };
    
        var data = {
            
            allItems:{
                exp:[],
                inc:[]
            },
            
            totals:{
                exp:0,
                inc:0
            }
            
            
        };
    
        return {
            addItem: function(type, description, value){
                console.log('type : ' + type + ' , description : ' + description + ' , value : ' + value);
                var newItem , ID;
                
                // ID = lastId + 1
                if(data.allItems[type].length > 0){   
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
                }
                else{
                    ID = 0;
                }
                
                // create new item based on 'inc' or 'exp'
                if(type === 'exp'){
                    newItem = new Expense(ID,description,value);
                }
                
                else if(type === 'inc'){
                    newItem = new Income(ID,description,value);    
                }
                
                // push it into our data structure
                data.allItems[type].push(newItem);
                
                // return the new element
                return newItem;
            },
            
            testing: function(){
                console.log(data);
            }
        };
    
})();


// UI CONTROLLER
var UIController = (function(){
    
    var DOMStrings = {
        
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }
    
    return {
        
        getInput: function(){
            
            return{
                
                 type: document.querySelector(DOMStrings.inputType).value,
                 description: document.querySelector(DOMStrings.inputDescription).value,
                 value: document.querySelector(DOMStrings.inputValue).value
            };
            
        },
        
        addListItem: function(obj,type){
            var html, newHtml, element;
            
            // create HTML string with placeholder text
            if(type === 'inc'){
            element = DOMStrings.incomeContainer;
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type === 'exp'){
            element = DOMStrings.expensesContainer;
            html = ' <div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            
            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            
        },
        
        getDOMStrings: function(){
            return DOMStrings;
        }
    };
    
})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    
    var setupEventListners = function(){
        
        var DOM = UICtrl.getDOMStrings();
        
         document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);
    
         document.addEventListener('keypress',function(event){

            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();


            }

        });
    
    };
    
    
    
    var ctrlAddItem = function(){
        
        var input, newItem;
        
        // 1. Get the filled input data 
         input = UICtrl.getInput();
        //console.log(input);

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        
        // 4. Calculate the budget

        // 5. Display the budget on the UI
     
    };
    
    return {
        init: function(){
            console.log('Application is started');
            setupEventListners();
        }
    }
   
})(budgetController,UIController);


controller.init();
