import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JoinerBoardService } from 'src/app/services/joiner-board.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { MatDialog } from '@angular/material/dialog';
import { AllDialog } from 'src/app/landings/shared/dialog/allDialog/allDialog';
import { fabric } from 'fabric';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joineed-board',
  templateUrl: './joineed-board.component.html',
  styleUrls: ['./joineed-board.component.scss']
})
export class JoineedBoardComponent implements OnInit, AfterViewInit {
  active = false;
  useEraser = false;
  thickness = 5;
  color = '#000000';
  board: any;
  resolution: number = 0;
  images: any = [];
  image: any
  innerHeight = window.innerHeight
  strokeWidth: number;
  strokeColor: string;
  canvas: fabric.Canvas;

  public props = {
    canvasFill: '#ffffff',
    canvasImage: '',
    id: null,
    opacity: null,
    fill: null,
    fontSize: null,
    lineHeight: null,
    charSpacing: null,
    fontWeight: null,
    fontStyle: null,
    textAlign: null,
    fontFamily: null,
    TextDecoration: ''
  };

  isLoading: boolean = true

  public textString: string = "Input Text";
  public url: string | ArrayBuffer = '';


  public json: any;
  public textEditor = false;
  private imageEditor = false;
  public figureEditor = false;
  public selected: any;
  isTextAdded: boolean = false
  joinerBoardDataId: any;

  constructor(
    private joinerboard: JoinerBoardService,
    private _general: GeneralService,
    private dialog: MatDialog,
    private router: Router
  ) {

  }


  ngOnInit(): void {

    this.resolution = window.innerWidth - 150
    window.scrollTo(0, 0);
    this.dialog.open(AllDialog, {
      width: '450px',
      data: { header: "Welcome to the join board!", isHeaderIcon: false, message: "E-renity is for everyone, if you’d like to join as any type of member, please sign on the join board!", showNoBtn: false, }
    })

    this._general.setLoading(true);

    this.canvas = new fabric.Canvas('fabricSurface', {
      backgroundColor: '#ebebef',
      selection: true,
      preserveObjectStacking: false,
      width: this.resolution,
      height: this.innerHeight + 100,
      hoverCursor: 'pointer',
      selectionBorderColor: 'blue',
      isDrawingMode: true
    });

    // this.canvas.on("object:selected", e => {
    //   const selectedObject = e.target;
    //   this.selected = selectedObject;
    //   selectedObject.hasRotatingPoint = true;
    //   selectedObject.transparentCorners = false;
    //   selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';

    //   this.resetPanels();

    //   if (selectedObject.type !== 'group' && selectedObject) {

    //     this.props.id = this.canvas.getActiveObject().toObject().id;
    //     this.props.opacity = this.getActiveStyle('opacity', null) * 100;

    //     switch (selectedObject.type) {
    //       case 'rect':
    //       case 'circle':
    //       case 'triangle':
    //         this.figureEditor = true;
    //         this.props.fill = this.getActiveStyle('fill', null);
    //         break;
    //       case 'i-text':
    //         this.textEditor = true;
    //         this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    //         this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    //         this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    //         this.props.fill = this.getActiveStyle('fill', null);
    //         this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    //         this.props.textAlign = this.getActiveProp('textAlign');
    //         this.props.fontFamily = this.getActiveProp('fontFamily');
    //         break;
    //       case 'image':
    //         break;
    //     }
    //   }
    // }
    // );

    // this.canvas.on('mouse:down', (e) => {
    //   const canvasElement: any = document.getElementById('fabricSurface');
    // });

    // this.canvas.on("selection:cleared", e => {
    //   this.selected = null;
    //   this.resetPanels();
    // });

    setTimeout(()=>{
      this._general.setLoading(false)
    },2000)
  }

  setFill() {
    this.setActiveStyle('fill', this.props.fill, null);
  }

  resetPanels() {
    this.textEditor = false;
    this.imageEditor = false;
    this.figureEditor = false;
  }

  getActiveStyle(styleName, object) {
    object = object || this.canvas.getActiveObject();
    if (!object) { return ''; }

    if (object.getSelectionStyles && object.isEditing) {
      return (object.getSelectionStyles()[styleName] || '');
    } else {
      return (object[styleName] || '');
    }
  }

  setActiveStyle(styleName, value: string | number, object: fabric.IText) {
    object = object || this.canvas.getActiveObject() as fabric.IText;
    if (!object) { return; }

    if (object.setSelectionStyles && object.isEditing) {
      const style = {};
      style[styleName] = value;

      if (typeof value === 'string') {
        if (value.includes('underline')) {
          object.setSelectionStyles({ underline: true });
        } else {
          object.setSelectionStyles({ underline: false });
        }

        if (value.includes('overline')) {
          object.setSelectionStyles({ overline: true });
        } else {
          object.setSelectionStyles({ overline: false });
        }

        if (value.includes('line-through')) {
          object.setSelectionStyles({ linethrough: true });
        } else {
          object.setSelectionStyles({ linethrough: false });
        }
      }

      object.setSelectionStyles(style);
      object.setCoords();

    } else {
      if (typeof value === 'string') {
        if (value.includes('underline')) {
          object.set('underline', true);
        } else {
          object.set('underline', false);
        }

        if (value.includes('overline')) {
          object.set('overline', true);
        } else {
          object.set('overline', false);
        }

        if (value.includes('line-through')) {
          object.set('linethrough', true);
        } else {
          object.set('linethrough', false);
        }
      }

      object.set(styleName, value);
    }

    object.setCoords();
    this.canvas.renderAll();
  }


  getActiveProp(name) {
    const object = this.canvas.getActiveObject();
    if (!object) { return ''; }

    return object[name] || '';
  }

  setActiveProp(name, value) {
    const object = this.canvas.getActiveObject();
    if (!object) { return; }
    object.set(name, value).setCoords();
    this.canvas.renderAll();
  }

  setCanvasFill() {
    if (!this.props.canvasImage) {
      this.canvas.backgroundColor = this.props.canvasFill;
      this.canvas.renderAll();
    }
  }

  addText() {
    const text = new fabric.IText(this.textString, {
      left: 10,
      top: 10,
      fontFamily: 'helvetica',
      angle: 0,
      fill: '#000000',
      scaleX: 0.5,
      scaleY: 0.5,
      fontWeight: '',
      hasRotatingPoint: true
    });

    this.extend(text, this.randomId());
    this.canvas.add(text);
    this.selectItemAfterAdded(text);
    this.textString = 'Input Text';
    this.isTextAdded = false
  }

  drawingMode(mode = false) {
    this.canvas.isDrawingMode = mode
  }

  addFigure(figure) {
    let add: any;
    switch (figure) {
      case 'rectangle':
        add = new fabric.Rect({
          width: 200, height: 100, left: 10, top: 10, angle: 0,
          fill: '#3f51b5'
        });
        break;
      case 'square':
        add = new fabric.Rect({
          width: 100, height: 100, left: 10, top: 10, angle: 0,
          fill: '#4caf50'
        });
        break;
      case 'triangle':
        add = new fabric.Triangle({
          width: 100, height: 100, left: 10, top: 10, fill: '#2196f3'
        });
        break;
      case 'circle':
        add = new fabric.Circle({
          radius: 50, left: 10, top: 10, fill: '#ff5722'
        });
        break;
    }
    this.extend(add, this.randomId());
    this.canvas.add(add);
    this.selectItemAfterAdded(add);
  }

  extend(obj, id) {
    obj.toObject = ((toObject) => {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          id
        });
      };
    })(obj.toObject);
  }

  randomId() {
    return Math.floor(Math.random() * 999999) + 1;
  }

  selectItemAfterAdded(obj) {
    this.canvas.discardActiveObject().renderAll();
    this.canvas.setActiveObject(obj);
  }

  onClear() {
    const activeObject = this.canvas.getActiveObject();
    const activeGroup = this.canvas.getActiveObjects();

    if (activeObject) {
      this.canvas.remove(activeObject);
    } else if (activeGroup) {
      this.canvas.discardActiveObject();
      const self = this;
      activeGroup.forEach((object) => {
        self.canvas.remove(object);
      });
    }
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.active = true
      this.getAllImage()
    }, 100);
  }

  toggleEdit() {
    this.useEraser = false;
    this.active = !this.active;
    setTimeout(() => {
      this.active = true

    }, 100);
  }

  toggleUseEraser(isUse: boolean) {
    this.useEraser = isUse
  }

  async getAllImage() {

    let res: any = await this.joinerboard.downloadMultipleAttachments({})
    this.canvas.clear();
    if (res.length > 0) {
      this.isLoading = false
      this.joinerBoardDataId = res[0]._id

      res.filter(x => {
        let dd = this._general.arrayBufferToBase64(x.bufferData.data);
        let fileType = "image/jpeg";
        fileType = fileType == undefined ? "image/jpeg" : fileType;
        let ss = `data:${fileType};base64,${dd}`;
        fabric.Image.fromURL(ss, (image) => {
          image.set({
            hasRotatingPoint: false,
            selectable: false
          });
          this.extend(image, this.randomId());
          this.canvas.add(image);
        });
      })
    } else {
      this.isLoading = false
    }
  }

  async onSave() {
    this.isLoading = true
    let param: any = {
      base64Data: this.canvas.toDataURL().replace(/^data:image\/(png|jpg);base64,/, "")
    }
    if (this.joinerBoardDataId == null)
      await this.joinerboard.post(param).then(res => {
        this.getAllImage()
        this.isLoading = false
      })
    else {
      param.joinerBoardDataId = this.joinerBoardDataId,
        await this.joinerboard.put(param).then(res => {
          this.getAllImage()
          this.isLoading = false
        })
    }
    let dialogRef = this.dialog.open(AllDialog, {
      width: '450px',
      data: { header: "Success", isHeaderIcon: false, message: "Thanks for signing on the Joiner Board! <br> Do you want to sign up for E-renity platform?", showNoBtn: true, }
    })
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this.router.navigate(['/membership'])
      }
    })
  }

  async onDelete() {
    await this.joinerboard.delete({ joinerBoardDataId: this.joinerBoardDataId }).then(res => {
    })
  }
}
