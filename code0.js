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


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTARTObjects1Objects = Hashtable.newFrom({"START": gdjs.MainMenuCode.GDSTARTObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.MainMenuCode.GDSTARTObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTARTObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

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

gdjs.MainMenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
