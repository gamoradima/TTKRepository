define("UsrCar1Page", [], function() {
	return {
		entitySchemaName: "UsrCar",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCarFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCar"
				}
			},
			"UsrMaintetanceDetail": {
				"schemaName": "UsrSchema1c11b163Detail",
				"entitySchemaName": "UsrCarMaintenance",
				"filter": {
					"detailColumn": "UsrCar",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onMyButtonClick: function() {
				// todo
				this.console.log("Моя кнопка нажата.");
			},
			getMyButtonEnabled: function() {
				let result = true;
				var name = this.get("UsrName");
				if (!name) {
					result = false;
				}
				return result;
			},
			getActions: function() {
                // Вызывается родительская реализация метода для получения
                // коллекции проинициализированных действий базовой страницы.
                var actionMenuItems = this.callParent(arguments);
                // Добавление линии-разделителя.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    Type: "Terrasoft.MenuSeparator",
                    Caption: ""
                }));
                // Добавление пункта меню в список действий страницы записи.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    // Привязка заголовка пункта меню к локализуемой строке схемы.
                    "Caption": {bindTo: "Resources.Strings.CalcPaymentCaption"},
                    // Привязка метода-обработчика действия.
                    "Tag": "runCalcAction",
                    // Привязка свойства доступности пункта меню к значению, которое возвращает метод isRunning().
                    "Enabled": true
                }));
                return actionMenuItems;
            },
			runCalcAction: function() {
				let price = this.get("UsrPrice");
				let payment = price / 12;
				this.showInformationDialog("Ежемесячный платёж: " + payment);
			},
			positiveValueValidator: function(value, column) {
				let msg = "";
				//let price = this.get("UsrPrice");
				if (value < 0) {
					msg = this.get("Resources.Strings.ValueMustBePositive");
				}
				return {
                    // Сообщение об ошибке валидации.
                    invalidMessage: msg
                };
			},
			
			setValidationConfig: function() {
                // Вызывает инициализацию валидаторов родительской модели представления.
                this.callParent(arguments);
                // Для колонки [DueDate] добавляется метод-валидатор dueDateValidator().
                this.addColumnValidator("UsrPrice", this.positiveValueValidator);
            }
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName9cd5a25e-b667-4174-8c03-b6cb050fec3e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME1a5fac17-4922-4fc5-a3b1-f477e5e5ecfe",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrProdDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT6951a1b9-e084-4698-9443-25839071cd38",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
            // Метаданные для добавления на страницу пользовательской кнопки.
            {
                // Выполняется операция добавления компонента на страницу.
                "operation": "insert",
                // Мета-имя родительского контейнера, в который добавляется кнопка.
                "parentName": "ProfileContainer",
                // Кнопка добавляется в коллекцию компонентов
                // родительского элемента.
                "propertyName": "items",
                // Мета-имя добавляемой кнопки.
                "name": "MyButton",
                // Свойства, передаваемые в конструктор компонента.
                "values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},					
                    // Тип добавляемого элемента — кнопка.
                    itemType: Terrasoft.ViewItemType.BUTTON,
                    // Привязка заголовка кнопки к локализуемой строке схемы.
                    caption: {bindTo: "Resources.Strings.MyButtonCaption"},
                    // Привязка метода-обработчика нажатия кнопки.
                    click: {bindTo: "onMyButtonClick"},
                    // Привязка свойства доступности кнопки.
                    enabled: {bindTo: "getMyButtonEnabled"},
                    // Стиль отображения кнопки.
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
                }
            },
			{
				"operation": "insert",
				"name": "LOOKUP82bf1442-5a5b-475c-b7dd-28258bae2cb0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPbcdd15b0-8ac3-4055-82a6-a4cdc064d31d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrBodyType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4dfba105TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4dfba105TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrMaintetanceDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4dfba105TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
