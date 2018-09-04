var Excel = require('exceljs');
function excel (sourceData) {
    var start_time = new Date();
    var workbook = new Excel.stream.xlsx.WorkbookWriter({
    filename: './data/demo.xlsx'
    });
    var worksheet = workbook.addWorksheet('Sheet');
    
    //设置　start-end 列的宽度
    function colWidth(arg_ws, arg_cols, arg_width) {
        for(i in arg_cols) {
            arg_ws.getColumn(arg_cols[i]).width = arg_width;
        }
    }
    worksheet.columns = [
        { header: 'title', key: 'title', width: 30, style: { font: { name: 'Arial Black', size: 20} } },
        { header: 'price', key: 'price', width: 30 },
        { header: 'img_src', key: 'img_src', width: 90 }
        
    ];
    var data = sourceData;
    var length = data.length;
    // 当前进度
    var current_num = 0;
    var time_monit = 400;
    var temp_time = Date.now();

    console.log('开始添加数据');
    // 开始添加数据
    for(let i in data) {
        worksheet.addRow(data[i]).commit();
        current_num = i;
        if(Date.now() - temp_time > time_monit) {
            temp_time = Date.now();
            console.log((current_num / length * 100).toFixed(2) + '%');
        }
    }
    console.log('添加数据完毕：', (Date.now() - start_time));
    console.log('本次添加数据' + length);
    workbook.commit();

    var end_time = new Date();
    var duration = end_time - start_time;

    console.log('用时：' + duration);
    console.log("程序执行完毕");
}
module.exports = excel;
