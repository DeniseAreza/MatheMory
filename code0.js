gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDSTARTObjects1= [];
gdjs.MainMenuCode.GDSTARTObjects2= [];
gdjs.MainMenuCode.GDNewObjectObjects1= [];
gdjs.MainMenuCode.GDNewObjectObjects2= [];
gdjs.MainMenuCode.GDNewObject2Objects1= [];
gdjs.MainMenuCode.GDNewObject2Objects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.MainMenuCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewObject2Objects1[i].setOutline("71;49;66", 15);
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDSTARTObjects1.length = 0;
gdjs.MainMenuCode.GDSTARTObjects2.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects1.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects2.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects1.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
