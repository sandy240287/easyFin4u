$(document).ready(function () {

jQuery("#list2").jqGrid({
   	url:'/api/deposits',
	  datatype: "json",
   	colNames:['Bank','Deposit Number', 'Amount', 'Creation Date','Maturity Date','Deposit Type','Maturity Amount'],
   	colModel:[
   		{name:'bank',index:'bank', width:100, editable: true},
   		{name:'number',index:'number', width:150, key:true, editable: true},
   		{name:'amount',index:'amount', width:100, editable: true},
   		{name:'createDate',index:'createDate', width:150, align:"right", editable: true},
   		{name:'maturityDate',index:'maturityDate', width:150, align:"right", editable: true},
   		{name:'type',index:'type', width:80,align:"right", editable: true},
   		{name:'maturityAmount',index:'maturityAmount', width:100, sortable:false, editable: true}
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

jQuery("#list2").jqGrid('navGrid','#pager2',{edit: false, add: false,del:true,refresh: false, view: false});
jQuery("#list2").jqGrid('inlineNav',"#pager2", { edit: true,add: true, del: true, cancel: true,
                    editParams: {
                        keys: true,
                    },
                    addParams: {
                        keys: true
                    }
                });
});
