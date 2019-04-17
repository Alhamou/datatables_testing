class Data_table {


    constructor( ) {

    }
    
    // add new Row from [Form Object].
    async save (object){
  
        await this.table.row.add(object).draw();
    }

   
}