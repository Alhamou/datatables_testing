class Data_table {

    
    constructor(  ) {

        this.table = new Object;
        
    }
    
    // add new Row from [Form Object].
    async save (object){
        await this.table.row.add(object).draw();
    }
    delete (row) {
        this.table
                .row(row )
                .remove()
                .draw();
    }
    getRow(row){
       return this.table.row( row ).data();
    }
    
}