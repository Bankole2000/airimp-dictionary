// let myArr = "some string";

// console.log(typeof myArr);

// if fields = [], then values = {fieldName: ''}

const testFunction =  (fields, values, type = null) => {
    if(typeof fields === "object"){
        if (fields.length === 1) {
            console.log('singleField Property')
            // i.e. return single field result shape
        }
        let valuesGiven = [];
        let possibleValues = [];
        fields.forEach(field => {
            valuesGiven.push({fieldName : field, value: values[field]})
        });
       return  {
            code: '', 
            shortDesc: '', // for tooltips
            longDesc: '', // for further details
            fields, // fields that determine code value, 
            valuesGiven
          } 
    }
}

result = testFunction(['isBoarded', 'isCheckedIn'], {isBoarded: true, isCheckedIn: true});
console.log(result);