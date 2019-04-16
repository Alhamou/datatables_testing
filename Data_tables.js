class Data_tables {
    constructor(arrays, form, selector) {
        this.arrays = arrays;
        this.form = form;


        this.table = selector.DataTable({
            data: arrays,
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
            }
        });

    }
     

    async add_row (){
        await this.table.row.add( [
            this.form.name.value,
            this.form.position.value,
            this.form.office.value,
            this. form.age.value,
            this.form.start_date.value,
            this.form.salary.value
        ]).draw( false );
    }

}