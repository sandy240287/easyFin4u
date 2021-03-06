$(document).ready(function () {

$("#list2").jqGrid({
   	url:'/api/deposits',
    mtype: "GET",
	  datatype: "json",
   	colNames:['Bank','Deposit Number', 'Amount', 'Creation Date','Maturity Date','Deposit Type','Maturity Amount'],
   	colModel:[
   		{name:'bank', width:150, align:"left", editable: true,editrules:{
                            required: true
                        }},
   		{name:'number', width:150, align:"left", key:true, editable: true,editrules:{
                            required: true
                        }},
   		{name:'amount', width:150, align:"right", editable: true,editrules:{
                            number: true,
                            required: true
                        }},
   		{name:'createDate', width:150, align:"right", formatter: "date", formatoptions: { newformat: "d/m/Y" },
                            editable: true,editoptions:{
                            dataInit:function(el) {
                              setTimeout(function() { $(el).datepicker(); }, 200);
                            },
                            required: true
                        }},
   		{name:'maturityDate', width:150, align:"right", formatter: "date", formatoptions: { newformat: "d/m/Y" }
                            ,editable: true,editoptions:{
                            dataInit:function(el) {
                              setTimeout(function() { $(el).datepicker(); }, 200);
                            },
                            required: true
                        }},
   		{name:'type', width:80,align:"left", editable: true,editrules:{
                            required: true
                        }},
   		{name:'maturityAmount', width:150, align:"right",  sortable:false, editable: true,editrules:{
                            number: true,
                            required: true
                        }}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#pager2',
   	sortname: 'number',
    viewrecords: true,
    sortorder: "desc",
    caption:"Deposit List",
    width:'100%',
    editurl: "/api/deposits",
    rownumbers : true
});

$("#list2").navGrid("#pager2",
                { edit: true, add: true, del: true, search: false, refresh: true, view: false, align: "left" },
                { closeAfterEdit: true , closeAfterAdd: true }
            );

// jQuery("#list2").jqGrid('navGrid','#pager2',{edit: false, add: false,del:true,refresh: false, view: false});
// jQuery("#list2").jqGrid('inlineNav',"#pager2", { edit: true,add: true, del: true, cancel: true,
//                     editParams: {
//                         keys: true,
//                     },
//                     addParams: {
//                         keys: true
//                     }
//                 });

});
