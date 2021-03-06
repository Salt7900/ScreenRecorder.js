//TODO how do we want to execute the recording? How about run the function and set the config/parameters on the obj?
function runRecording() {
  var ROOT_ELEMENT;
}





// allows the user to click on the root element of the page
function findRootElement(event) {
  event.stopPropagation();
  var existingNodes = document.getElementsByTagName('*');
  
  //remove the listener from all the page nodes
  var removeListeners = function() {
      for(var index = 0; index < existingNodes.length; index++) {
          var node = existingNodes[index];			
          node.removeEventListener('click', actualListener);
      }
  };
  
  var actualListener = function(event) {
    event.stopPropagation();
    ROOT_ELEMENT = event.target;
    removeListeners();
  };
  
  for(var index = 0; index < existingNodes.length; index++) {
    var node = existingNodes[index];
	node.addEventListener('click', actualListener);		
  }
}

document.getElementById('newRecordingBtn').addEventListener('click', findRootElement);

//TODO open prompt to have user select file from desktop
function openLoadRecordingScreen(event) {}

document.getElementById('loadRecordingBtn').addEventListener('click', openLoadRecordingScreen);

//TODO open modal displaying the script's steps displayed in a table allowing the user to edit the steps
function openEditRecordingScreen(event) {}

document.getElementById('editRecordingBtn').addEventListener('click', openEditRecordingScreen);
/**





//the root element the script is focusing on, default it to body? or make a pop up requesting user to select
var recordingLocked = false;
//the current event types we know how to handle
var eventTypes = ['click', 'keypress', 'dblclick', 'drag'];
/**
 * The list of actions our output script will perform
 * Format: {
 *	wait: '', // the time to wait before executing this action (multiplied by the user specified speed weight) 
 *  eventType: '', // the type of event that was captured
 *  eventDetails: '', // the event object that was captured
 *  node: '', // the node this event was captured on
 * }
 * /
var scriptActions = [];

var observerConfig = { attributes: true, childList: true, characterData: true };

var Observer = new MutationObserver(function(list) {
	list.forEach(function(mutation) {
		listenOnNodes(mutation.addedNodes);
	})
});

function startListening(){
	var rootNode = '';
	//TODO we have to ensure our existing nodes we listen to are children of or are the rootNodes
	var existingNodes = document.getElementsByTagName('*');
	listenOnNodes(existingNodes);
	
	if(ROOT_ELEMENT.type == 'tagName') {
		rootNode = document.getElementsByTagName(ROOT_ELEMENT.value);		
		if(rootNode.length > 1) {
			//TODO THROW ERROR - ROOT_ELEMENT NOT UNIQUE
		} else {
			rootNode = rootNode[0];
		}
	} else if(ROOT_ELEMENT.type == 'id') {
		rootNode = document.getElementById(ROOT_ELEMENT.value);
	} else if(ROOT_ELEMENT.type == 'name') {
		rootNode = document.getElementsByName(ROOT_ELEMENT.value);
		if(rootNode.length > 1) {
			//TODO THROW ERROR - ROOT_ELEMENT NOT UNIQUE
		} else {
			rootNode = rootNode[0];
		}
	}
	if(rootNode instanceof Array) {
		for(var index = 0; index < rootNode.length; index++) {
			var aRootNode = rootNode[index];
			Observer.observe(aRootNode, observerConfig);	
		}
	} else {
		Observer.observe(rootNode, observerConfig);	
	}	
}

startListening();

*/
