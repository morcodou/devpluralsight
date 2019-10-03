# devpluralsight

https://davidwalsh.name/convert-html-stings-dom-nodes
https://chariotsolutions.com/blog/post/testing-angular-2-components-unit-tests-testcomponentbuilder/
https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
https://koukia.ca/javascript-domparser-a-good-choice-to-convert-html-strings-to-dom-elements-9a1974d95f0b

https://stackoverflow.com/questions/32541765/how-to-dynamically-create-a-typescript-table


class ModuleTable {
  table: HTMLTableElement;
  private thead: HTMLTableElement;
  private tbody: HTMLTableElement;
  constructor() {
    this.table = document.createElement('table');
    this.thead = <HTMLTableElement> this.table.createTHead();
    this.tbody = <HTMLTableElement> this.table.createTBody();
    var hrow = <HTMLTableRowElement> this.table.tHead.insertRow(0);
    var cell = hrow.insertCell(0);
    cell.innerHTML = "Module ID";
  }
https://riptutorial.com/rxjs/example/28035/sending-multiple-sequential-http-requests
  https://codecraft.tv/courses/angular/http/http-with-observables/
  
  
