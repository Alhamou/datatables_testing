class Data_table {


    constructor() {}


    // add new Row from [Form Object].
    async add_row (form){

        let arr = [];

        // return validation erro Message for Client.
        let validation_error = {error: '', message: ''};

        // each Form Object.
        for ( let i of form) {

            ////////////////////////////////////////////////////////////////////
            // add Code hear for validation the Data befor storage in Database//
            ////////////////////////////////////////////////////////////////////

            arr = [...arr, i.value];
        }
        await this.table.row.add(arr).draw();
    }

}