function load() {
  for (const [slot, subject] of Object.entries(SUBJECTS)) {
    var anchors = document.getElementsByClassName(slot);
    if (subject.name === "slot") { continue; }
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].innerHTML = subject.name;
        anchors[i].onclick = function() {
          (subject.link == "") ? 
            alert('Slot: '+slot+'\nSubject: '+subject.name+'\nLink: '+"Not Provided") :
            window.open(subject.link);
      }
    }
  }

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 2; j++) {
      id = 'p'+i.toString()+j.toString();
      if (j == 0) {
        var anchor = document.getElementById(id+'a');
        anchor.innerHTML = PRACTICALS[i][j][0];
        anchor = document.getElementById(id+'b');
        anchor.innerHTML = PRACTICALS[i][j][1];
      }
      else {
        var anchor = document.getElementById(id);
        anchor.innerHTML = PRACTICALS[i][j];
      }
    }
  }
}

window.onload = load; // onload
