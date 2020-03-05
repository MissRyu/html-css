//canvas_lottery_example.js
var sys;
function vlog(msg){
	try{
		return console.log(msg);
	}catch(error){
		console.log("vlog function need to debug\nline number = "+error.lineNumber+"\nerror name = "+ ertor.name+"\nmessage = " + error.message);
	}finally{
		delete(msg);
	}
};

function elog(e,label){
	try{
		return vlog(label + " function / object need to debug\n\nline number\n\t\t" + e.lineNumber + "\nerror name\n\t\t" + e.name + "\nmessage\n\t\t" + e.message);
	}catch(error){
		vlog("elog function need to debug\nline number = "+error.lineNumber+"\nerror name = "+ ertor.name+"\nmessage = " + error.message);
	}finally{
		delete(e);
		delete(label);
	}
};

function px2val(prop){
	var val;
	try{
		switch(true){
			case(!((prop).toString().match(/px/g))):
			return false;
			default:
				val = prop.substr(0,prop.toString().length - 2);
			return parseInt(val);
		}
		return false;
	}catch(error){
		elog(error,"px2val");
	}finally{
		delete(prop);
		delete(val);
	}
};

function px(val){
	try{
		return val + "px";
	}catch(error){
		elog(error,"px");
	}finally{
		delete(val);
	}
};

function isvalue(v){
	try{
		switch(true){
			case((!v || v == "undefined" || isNaN(v) === true || v == "") && typeof v != "number" && typeof v != "string"):
			return false;
			default:
			return true;
		}
		return false;
	}catch(error){
		elog(error,"isvalue");
	}finally{
		delete(v);
	}
};

function acind(arr){
	try{
		return (arr.length - 1);
	}catch(e){
		elog(e,"acind");
	}finally{
		delete(arr);
	}
}

function pattern_(){
	this.symbol;
	this.init = function init(){
		this.symbol = new Array("§","※","☆","★","○","●","◎","◇","◆","□","■","△","▲","▽","▼","◁","◀","▷","▶","♤","♠","♡","♥","♧","♣","⊙","◈","▣","◐","◑","♨","☏","☎","☜","☞");
//		vlog(this.symbol);
		return false;
	};
};

function bonus_(){
	this.pattern;
	this.piece;
	this.init = function init(pob){
		try{
			var i,s,sl;
			this.pattern = new pattern_();
			this.pattern.init();
			sl = this.pattern.symbol.length - 1;
			this.piece = new Array();
			for(i = 0;i < pob;i++){
				s = Math.round(Math.random(0,sl) * (sl));
//				vlog(s);
				this.piece.push(this.pattern.symbol[s]);
			}
			return false;
		}catch(e){
			elog(e,"bunus_.init");
		}finally{
			delete(pob);
			delete(i);
			delete(s);
			delete(sl);
		}
	}
};

function lottery_(){
	this.pid;
	this.lname;
	this.x;
	this.y;
	this.w;
	this.h;
	this.tfont;
	this.tw;
	this.tgrd;
	this.grdi;
	this.bg;
	this.wbg;
	this.wfont;
	this.warea;
	this.bbg;
	this.bfont;
	this.barea;
	this.draw_str;
	this.max;
	//piece of number
	this.pon;
	//win number -> lottery jackpot
	this.wn;
	this.number;
	//winning pattern -> bonus jackpot : ex)★★★
	this.wp;
	//piece of bunus
	this.pob;
	this.bonus;
	this.prob;
	this.limg;
	this.scratch;
	this.snum;
	this.init = function init(pid,info){
		try{
			var i,s;
			this.pid = pid;
			info = info.split("/");
			for(i = 0;i < info.length;i++){
				info[i] = info[i].split("<");
				switch(true){
					case(/^\d+$/.test(info[i][1])
					&& info[i][0] != "wn"
					&& info[i][0] != "warea"
					&& info[i][0] != "barea"):
						this[info[i][0]] = parseInt(info[i][1]);
					break;
					case(/^\d+$/.test(info[i][1])
					&& info[i][0] != "wn"
					&& info[i][0] != "warea"
					&& info[i][0] != "barea"):
						this[info[i][0]] = parsefloat(info[i][1]);
					break;
					default:
						this[info[i][0]] = info[i][1];
					break;
				}
			}
			this.tgrd = this.tgrd.split(",");
			this.grdi = new Array();
			for(i = 0;i < this.tgrd.length;i++){
				this.grdi.push((i / (this.tgrd.length - 1)).toFixed(2));
			}
//			vlog(this.grdi);
//			vlog(typeof this.warea + ":" + this.warea);
			this.warea = this.warea.toString().split(":");
			this.warea[0] = this.warea[0].split(",");
			this.warea[0][0] = parseFloat(this.warea[0][0]);
			this.warea[0][1] = parseFloat(this.warea[0][1]);
			this.warea[1] = this.warea[1].split(",");
			this.warea[1][0] = parseFloat(this.warea[1][0]);
			this.warea[1][1] = parseFloat(this.warea[1][1]);
			this.barea = this.barea.split(":");
			this.barea[0] = this.barea[0].split(",");
			this.barea[0][0] = parseFloat(this.barea[0][0]);
			this.barea[0][1] = parseFloat(this.barea[0][1]);
			this.barea[1] = this.barea[1].split(",");
			this.barea[1][0] = parseFloat(this.barea[1][0]);
			this.barea[1][1] = parseFloat(this.barea[1][1]);
			this.number = new Array();
			for(i = 0;i < this.pon;i++){
				s = Math.round(Math.random(0,this.max) * this.max);
				this.number.push(s);
			}
			this.bonus = new bonus_();
			this.bonus.init(this.pob);
			return false;
		}catch(e){
			elog(e,"lottery_.init");
		}finally{
			delete(pid);
			delete(info);
			delete(i);
		}
	};
	this.save_lottery = function save_lottery(img){
		try{
			this.limg = img;
			return false
		}catch(e){
			elog(e,"lottery_.save_lottery");
		}finally{
			delete(img);
		}
	};
	this.save_scratch = function save_scratch(img){
		try{
			this.scratch = img;
			return false;
		}catch(e){
			elog(e,"lottery_.save_scratch");
		}finally{
			delete(img);
		}
	};
};

function system_(){
	this.id;
	this.cid;
//	this.pmouse;
	this.mouse;
//	this.count;
	this.canvas;
	this.context;
	this.lottery;
	this.ltgrd;
	this.coin_radius;
	this.coin_rd;
	this.crd;
	this.period;
	this.force;
	this.a360;
	this.a90;
	this.deg;
	this.deg2;
	this.deg2d;
	this.degh;
	this.degh2;
	this.crdc;
	this.s;
	this.tobj;
	this.init = function init(id,canvas_info,lottery_info,coin_radius,coin_rotate_degree,force,period){
		try{
			var i;
			var c = "constructor";
			this.id = id;
			this.mouse = new Array();
			this.lottery = new lottery_();
			this.lottery.init(this.id,lottery_info);
			this.coin_radius = coin_radius;
			this.coin_rd = coin_rotate_degree;
			this.force = force;
			this.deg = (Math.PI / 180);
			this.a360 = Math.PI * 2;
			this.a90 = Math.PI / 2;
			this.reset_coin_info();
			this.period = period;
			this.canvas = document.createElement("CANVAS");
			canvas_info = canvas_info.split(";");
			for(i = 0;i < canvas_info.length;i++){
				canvas_info[i] = canvas_info[i].split(":");
//				vlog(canvas_info[i][1] + " : " + isvalue(canvas_info[i][1].match(/[^a-zA-Zㄱ-힣\.]/)));
				switch(true){
					case(/^\d+$/.test(canvas_info[i][1])):
						this.canvas[canvas_info[i][0]] = parseInt(canvas_info[i][1]);
					break;
					case(/^\d+$/.test(canvas_info[i][1])):
						this.canvas[canvas_info[i][0]] = parsefloat(canvas_info[i][1]);
					break;
					default:
						this.canvas[canvas_info[i][0]] = canvas_info[i][1];
					break;
				}
			}
			this.canvas.style.width = px(this.canvas.width);
			this.canvas.style.height = px(this.canvas.height);
			this.cid = this.canvas.id;
			document.body.appendChild(this.canvas);
			this.canvas = document.getElementById(this.cid);
			this.context = this.canvas.getContext("2d");
			this.s = {
			c1:this.canvas.offsetLeft + this.lottery.x - (this.coin_radius * 2),
			c2:this.canvas.offsetLeft + this.lottery.x + this.lottery.w + (this.coin_radius * 2),
			c3:this.canvas.offsetTop + this.lottery.y - (this.coin_radius * 2),
			c4:this.canvas.offsetTop + this.lottery.y + this.lottery.h + (this.coin_radius * 2)
			}
			this.context.save();
			this.context.font = this.lottery.tfont;
			this.lottery.tw = parseInt(this.context.measureText(this.lottery.lname).width);
			this.context.restore();
//			vlog(this.lottery.tgrd);
			this.ltgrd = this.context.createLinearGradient(this.lottery.x + ((this.lottery.w / 2) - (this.lottery.tw / 2)),0,this.lottery.x + this.lottery.tw,0);
			for(i = 0;i < this.lottery.tgrd.length;i++){
//				vlog("this.ltgrd.addColorStop("+ i + "," + this.lottery.tgrd[i] + ")");
//				vlog();
				this.ltgrd.addColorStop(this.lottery.grdi[i],this.lottery.tgrd[i]);
			}
//			vlog("typeof this.lottery.tfont = " + typeof this.lottery.tfont + ":" + this.lottery.tfont);
			this.canvas.onmousemove = function onmousemove(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.onmouseover = function onmouseover(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.onmousedown = function onmousedown(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.onmouseup = function onmouseup(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.oncontextmenu = function oncontextmenu(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.onmouseout = function onmouseout(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.ontouchstart = function ontouchstart(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.ontouchmove = function ontouchmove(e){
				sys.set_mouse(e);
				return false;
			}
			this.canvas.ontouchcancel = function ontouchcancel(e){
				sys.set_mouse(e);
				return false;
			};
			this.canvas.ontouchend = function ontouchend(e){
				sys.set_mouse(e);
				return false;
			};
//			vlog("Math.cos(0 * this.deg) = " + Math.cos(0 * this.deg));
//			vlog("Math.cos(30 * this.deg) = " + Math.cos(30 * this.deg));
//			vlog("Math.cos(60 * this.deg) = " + Math.cos(60 * this.deg));
//			vlog("Math.cos(90 * this.deg) = " + Math.cos(90 * this.deg));
//			vlog("Math.cos(120 * this.deg) = " + Math.cos(120 * this.deg));
//			vlog("Math.cos(150 * this.deg) = " + Math.cos(150 * this.deg));
//			vlog("Math.cos(180 * this.deg) = " + Math.cos(180 * this.deg));
//			vlog("x : " + (this.canvas.offsetLeft + this.lottery.x) + " / w : " + (this.canvas.offsetLeft + this.lottery.x + this.lottery.w) +  " / y : " + (this.canvas.offsetTop + this.lottery.y) + " / h : " + (this.canvas.offsetTop + this.lottery.y + this.lottery.h));
			this.draw();
			return false;
		}catch(e){
			elog(e,"system_.init");
		}finally{
			delete(id);
			delete(canvas_info);
			delete(lottery_info);
			delete(coin_radius);
			delete(coin_rotate_degree);
			delete(force);
			delete(period);
			delete(i);
		}
	};
	this.set_mouse = function set_mouse(e){
		try{
			var ind;
			//set the mouse's x / y coordinate
			ind = acind(this.mouse);
			switch(true){
				case(e.type == ("mouseup" || "touchcancel")
				|| (e.buttons === 0 && e.type == "mousemove")
				|| e.buttons === 2):
					this.mouse = new Array();
					this.lottery.snum = 0;
//					this.mouse[ind].down = false;
//					this.mouse[ind].move = true;
				break;
				case(e.type == "touchstart"):
					this.mouse.push({x:(+{}),y:(+{}),down:![],move:![]});
					ind += 1;
					this.mouse[ind].x = parseInt(e.touches[0].pageX - this.canvas.offsetLeft + (window.pageXOffset||window.scrollX||document.body.scrollLeft));
					this.mouse[ind].y = parseInt(e.touches[0].pageY - this.canvas.offsetTop + (window.pageYOffset||window.scrollY||document.body.scrollTop));
					this.mouse[ind].down = true;
					this.mouse[ind].move = false;
					this.lottery.snum++;
				break;
				case(e.type == "touchmove"):
					this.mouse.push({x:(+{}),y:(+{}),down:![],move:![]});
					ind += 1;
					this.mouse[ind].x = parseInt(e.touches[0].pageX - this.canvas.offsetLeft + (window.pageXOffset||window.scrollX||document.body.scrollLeft));
					this.mouse[ind].y = parseInt(e.touches[0].pageY - this.canvas.offsetTop + (window.pageYOffset||window.scrollY||document.body.scrollTop));
					this.mouse[ind].down = true;
					this.mouse[ind].move = true;
					this.lottery.snum++;
				break;
				case(e.buttons === 1 && e.type == "mousedown"):
					this.mouse.push({x:(+{}),y:(+{}),down:![],move:![]});
					ind += 1;
					this.mouse[ind].x = parseInt((e.clientX||e.screenX) - this.canvas.offsetLeft + (window.pageXOffset||window.scrollX||document.body.scrollLeft));
					this.mouse[ind].y = parseInt((e.clientY||e.screenY) - this.canvas.offsetTop + (window.pageYOffset||window.scrollY||document.body.scrollTop));
					this.mouse[ind].down = true;
					this.mouse[ind].move = false;
					this.lottery.snum++;
				break;
				case(e.buttons === 1 && e.type == "mousemove"):
					this.mouse.push({x:(+{}),y:(+{}),down:![],move:![]});
					ind += 1;
					this.mouse[ind].x = parseInt((e.clientX||e.screenX) - this.canvas.offsetLeft + (window.pageXOffset||window.scrollX||document.body.scrollLeft));
					this.mouse[ind].y = parseInt((e.clientY||e.screenY) - this.canvas.offsetTop + (window.pageYOffset||window.scrollY||document.body.scrollTop));
					this.mouse[ind].down = true;
					this.mouse[ind].move = true;
					this.lottery.snum++;
				break;
			}
//			vlog(this.mouse);
			return false;
		}catch(e_){
			elog(e_,"system_.set_mouse");
		}finally{
			delete(e);
		}
	};
	this.coin_rd_add_degree = function coin_rd_add_degree(value){
		try{
			switch(true){
				case(typeof value === "number"):
					this.coin_rd += value;
					this.reset_coin_info();
				return true;
			}
			return false;
		}catch(e){
			elog(e,"system_.crd_add_degree");
		}finally{
			delete(value);
		}
	};
	this.reset_coin_info = function reset_coin_info(){
		try{
			this.deg2 = ((this.coin_rd + 270) * this.deg);
			this.crd = {
				x:Math.round(Math.cos(this.deg2) * this.coin_radius),
				y:Math.round(Math.sin(this.deg2) * this.coin_radius)
			};
//			vlog("this.deg is " + this.deg + " / this.deg's degree is" + Math.round((this.deg * 180) / Math.PI) + " / this.deg2 is "+ this.deg2 + " / this.deg2's degree is " + Math.round((this.deg2 * 180) / Math.PI));
			this.degh = this.deg2 + Math.PI + (-1 * this.a90 * this.force);
			this.degh2 = this.deg2 + Math.PI + (this.a90 * this.force);
//			vlog("(this.a90 * this.force)'s degree is " + Math.round(((this.a90 * this.force) * 180) / Math.PI));
//			vlog("this.degh's degree is " + Math.round((this.degh * 180) / Math.PI) + " / this.degh2's degree is " +  Math.round((this.degh2 * 180) / Math.PI));
			this.crdc = {
				x1:this.crd.x + (Math.round(Math.cos(this.degh) * this.coin_radius)),
				y1:this.crd.y + (Math.round(Math.sin(this.degh) * this.coin_radius)),
				x2:this.crd.x + (Math.round(Math.cos(this.degh2) * this.coin_radius)),
				y2:this.crd.y + (Math.round(Math.sin(this.degh2) * this.coin_radius)),
			};
//			vlog(this.crd);
//			vlog(this.crdc);
			return false;
		}catch(e){
			elog(e,"system_.reset_coin_info");
		}finally{
		}
	};
	this.draw = function draw(){
		try{
			var img;
			var i;
			var h;
			var w;
			var dx,dy,a;
			var text;
			var ia;
			var di;

			switch(true){
				case(typeof this.lottery.scratch != "object"):
					this.context.save();
					this.context.globalCompositeOperation = "destination-over";
					this.context.beginPath();
					this.context.font = this.lottery.wfont;
					this.context.fillStyle = "black";
					this.context.fillText("W I N N I N G N U M B E R", this.lottery.x + (((this.lottery.w * this.lottery.warea[1][0]) / 2) - (this.context.measureText("W I N N I N G N U M B E R").width / 2)),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 15 + parseInt(this.lottery.wfont.substr(0,2)));
					this.context.fillStyle = "blue";
					this.context.fillText(this.lottery.wn, this.lottery.x + (((this.lottery.w * this.lottery.warea[1][0]) / 2) - (this.context.measureText(this.lottery.wn+[]).width / 2)),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 35 + parseInt(this.lottery.wfont.substr(0,2)));
//					vlog(this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 35 + parseInt(this.lottery.wfont.substr(0,2)));
					this.context.fillStyle = "black";
					for(i = 0;i < this.lottery.number.length;i++){
						text = (i === 0?"1st : " + this.lottery.number[i]:(i === 1?"2nd : " + this.lottery.number[i]:(i === 2?"3rd : " + this.lottery.number[i]:(i + 1) + "th : " + this.lottery.number[i])));
//						vlog(text);
//						vlog("(this.lottery.x[" + this.lottery.x + "] + ((i % 2)[" + (i % 2) + "] * (((this.lottery.w[" + this.lottery.w + "] * this.lottery.warea[1][0][" + this.lottery.warea[1][0] + "])[" + (this.lottery.w * this.lottery.warea[1][0]) + "] - 30) / 2)[" + (((this.lottery.w * this.lottery.warea[1][0]) - 30) / 2) + "])) = " + (this.lottery.x + ((i % 2) * (((this.lottery.w * this.lottery.warea[1][0]) - 30) / 2))));
//						vlog(Math.floor(this.lottery.y + ((((this.lottery.h * this.lottery.warea[1][1]) - 70) / Math.ceil(this.lottery.number.length / 2))  * Math.floor(i / 2))));
						this.context.fillText(text,(this.lottery.x + ((i % 2) * (((this.lottery.w * this.lottery.warea[1][0]) - 30) / 2))) + 15,Math.floor(this.lottery.y + 60 + parseInt(this.lottery.wfont.substr(0,2)) + (this.lottery.h * this.lottery.warea[0][1]) + ((((this.lottery.h * this.lottery.warea[1][1]) - 70) / Math.ceil(this.lottery.number.length / 2))  * Math.floor(i / 2))));
					}
					this.context.closePath();
					this.context.beginPath();
					this.context.font = this.lottery.bfont;
					this.context.fillStyle = "black";
					this.context.fillText("B O N U S", this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + (((this.lottery.w * this.lottery.barea[1][0]) / 2) - (this.context.measureText("B O N U S").width / 2)),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 15 + parseInt(this.lottery.bfont.substr(0,2)));
					this.context.fillStyle = "blue";
					this.context.fillText(this.lottery.wp, this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + (((this.lottery.w * this.lottery.barea[1][0]) / 2) - (this.context.measureText(this.lottery.wp).width / 2)),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 35 + parseInt(this.lottery.bfont.substr(0,2)));
//					vlog(this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 35 + parseInt(this.lottery.bfont.substr(0,2)));
					this.context.fillStyle = "black";
					for(i = 0;i < this.lottery.bonus.piece.length;i++){
						text = (i === 0?"1st : " + this.lottery.bonus.piece[i]:(i === 1?"2nd : " + this.lottery.bonus.piece[i]:(i === 2?"3rd : " + this.lottery.bonus.piece[i]:(i + 1) + "th : " + this.lottery.bonus.piece[i])));
//						vlog(text);
//						vlog((this.lottery.y + ((this.lottery.h * this.lottery.barea[1][1]) - 70)));
						this.context.fillText(text,this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 15,Math.ceil(this.lottery.y + 60 + parseInt(this.lottery.bfont.substr(0,2)) + (this.lottery.h * this.lottery.barea[0][1]) + ((((this.lottery.h * this.lottery.barea[1][1]) - 70) / this.lottery.bonus.piece.length) * i)));
					}
					this.context.closePath();
//					this.context.save();
//					this.context.globalCompositeOperation = "destination-over";
					this.context.beginPath();
					this.context.fillStyle = this.lottery.bg;
					this.context.rect(this.lottery.x,this.lottery.y,this.lottery.w,this.lottery.h);
					this.context.closePath();
					this.context.beginPath();
					this.context.font = this.lottery.tfont;
					this.context.lineWidth = 3;
					this.context.fillStyle = this.ltgrd;
					h = this.lottery.tfont.split(" ");
					h[2] = parseInt(h[2]);
//					vlog(h[1]);
//					w = this.context.measureText(this.lottery.lname).width
//					vlog(w);
//					vlog((this.lottery.x + ((this.lottery.w / 2) - (w / 2)) + w));
					this.context.fillText(this.lottery.lname,this.lottery.x + ((this.lottery.w / 2) - (this.lottery.tw / 2)),(this.lottery.y + h[2] + Math.floor(((this.lottery.h * 0.2) - h[2]) / 2)));
					this.context.strokeText(this.lottery.lname,this.lottery.x + ((this.lottery.w / 2) - (this.lottery.tw / 2)),(this.lottery.y + h[2] + Math.floor(((this.lottery.h * 0.2) - h[2]) / 2)));
					this.context.closePath();
					this.context.beginPath();
					this.context.fillStyle = this.lottery.wbg;
					this.context.moveTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 15,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 5);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + ((this.lottery.w * this.lottery.warea[1][0]) - 15),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 5);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + ((this.lottery.w * this.lottery.warea[1][0]) - 5),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 5,this.lottery.x + (this.lottery.w * (this.lottery.warea[0][0] + this.lottery.warea[1][0]) - 5),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]) + 15,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + ((this.lottery.w * this.lottery.warea[1][0]) - 5),this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 15);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + ((this.lottery.w * this.lottery.warea[1][0]) - 5),this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 5,this.lottery.x + (this.lottery.w * (this.lottery.warea[0][0] + this.lottery.warea[1][0])) - 15,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 5,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 15,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 5);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 5,this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1] + this.lottery.warea[1][1])) - 15,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1])) + 15);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1])) + 5,this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]) + 15,this.lottery.y + (this.lottery.h * (this.lottery.warea[0][1])) + 5,10);
//					this.context.rect(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]),this.lottery.w * this.lottery.warea[1][0],this.lottery.h * this.lottery.warea[1][1]);
					this.context.fill();
					this.context.closePath();
					this.context.beginPath();
					this.context.fillStyle = this.lottery.bbg;
//					vlog(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 15);
					this.context.moveTo(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 15,this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 5);
					this.context.lineTo(this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 15),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 5);
					this.context.arcTo(this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 5),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 5,this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 5),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]) + 15,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 5),this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 15);
					this.context.arcTo(this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 5),this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 5,this.lottery.x + (this.lottery.w * (this.lottery.barea[0][0] + this.lottery.barea[1][0]) - 15),this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 5,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 15,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 5);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 5,this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1] + this.lottery.barea[1][1])) - 15,10);
					this.context.lineTo(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1])) + 15);
					this.context.arcTo(this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 5,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1])) + 5,this.lottery.x + (this.lottery.w * this.lottery.barea[0][0]) + 15,this.lottery.y + (this.lottery.h * (this.lottery.barea[0][1])) + 5,10);
//					this.context.rect(this.lottery.x + (this.lottery.w * this.lottery.warea[1][0]),this.lottery.y + (this.lottery.h * this.lottery.barea[0][1]),this.lottery.w * this.lottery.barea[1][0],this.lottery.h * this.lottery.barea[1][1]);
					this.context.fill();
					this.context.closePath();
					this.context.beginPath();
					this.context.fillStyle = this.lottery.bg;
					this.context.rect(this.lottery.x,this.lottery.y,this.lottery.w,this.lottery.h);
					this.context.fill();
					this.context.closePath();
					this.context.restore();
					this.lottery.limg = this.context.createImageData(this.lottery.w,this.lottery.h);
					img = this.context.getImageData(this.lottery.x,this.lottery.y,this.lottery.w,this.lottery.h);
					for(i = 0;i < this.lottery.limg.data.length;i++){
						this.lottery.limg.data[i] = parseInt(img.data[i]);
					}
//					this.lottery.save_lottery(ia);
					this.context.save();
//					vlog(this.context.globalCompositeOperation);
					this.context.beginPath();
					this.context.fillStyle = "gray";
					this.context.fillRect(this.lottery.x + (this.lottery.w * this.lottery.warea[0][0]),this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]),this.lottery.w,this.lottery.h * this.lottery.warea[1][1]);
//					this.context.fill();
					this.context.closePath();
					this.context.restore();
					this.lottery.scratch = this.context.createImageData(this.lottery.w,this.lottery.h * this.lottery.warea[1][1]);
					img = this.context.getImageData(this.lottery.x,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]),this.lottery.w,this.lottery.h * this.lottery.warea[1][1]);
					for(i = 0;i < this.lottery.scratch.data.length;i++){
						this.lottery.scratch.data[i] = parseInt(img.data[i]);
					}
//					this.lottery.save_scratch(ia);
//					img = this.context.getImageData(this.lottery.x,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]),this.lottery.w,this.lottery.h * this.lottery.warea[1][1]);
//					this.lottery.save_scratch(img);
					this.lottery.snum = 0;
				break;
				default:
					this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
					img = this.lottery.scratch;
					this.context.putImageData(img,this.lottery.x,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]));
				break;
			}
			switch(true){
				case(this.mouse.length > 2):
					this.context.save();
					this.context.globalCompositeOperation = "destination-out";
//					this.context.strokeStyle = "red";
//					this.context.fillStyle = "red";
//					this.context.fillStyle = "rgba(0,0,0,1)";
//					this.context.beginPath();
//					this.context.moveTo(this.mouse[i].x + this.crdc.x1,this.mouse[i].y + this.crdc.y1);
//					this.context.lineTo(this.mouse[(i - 1)].x + this.crdc.x1,this.mouse[(i - 1)].y + this.crdc.y1);
//					this.context.arc(this.mouse[(i - 1)].x + this.crd.x,this.mouse[(i - 1)].y + this.crd.y,this.coin_radius,this.degh,this.degh2);
//					this.context.lineTo(this.mouse[i].x + this.crdc.x2, this.mouse[i].y + this.crdc.y2);
//					this.context.arc(this.mouse[i].x + this.crd.x,this.mouse[i].y + this.crd.y,this.coin_radius,this.degh,this.degh2);
					switch(true){
						case(this.mouse.length > 18):
							di = 17;
						break;
						case(this.mouse.length > 16):
							di = 15;
						break;
						case(this.mouse.length > 14):
							di = 13;
						break;
						case(this.mouse.length > 12):
							di = 11;
						break;
						case(this.mouse.length > 10):
							di = 9;
						break;
						case(this.mouse.length > 8):
							di = 7;
						break;
						case(this.mouse.length > 6):
							di = 5;
						break;
						case(this.mouse.length > 4):
							di = 3;
						break;
						case(this.mouse.length > 2):
							di = 1;
						break;
					}
					for(i = this.lottery.snum - di;i < this.mouse.length;i++){
						dx = this.mouse[i].x - this.mouse[(i - 1)].x;
						dy = this.mouse[i].y - this.mouse[(i - 1)].y;
						a = Math.atan2(dy,dx);
						this.context.beginPath();
//						this.context.strokeStyle = "blue";
						this.context.fillStyle = "rgba(0,0,0,1)";
						this.context.arc(this.mouse[i].x,this.mouse[i].y,this.coin_radius,0,this.a360);
						this.context.moveTo(this.mouse[(i - 1)].x,this.mouse[(i - 1)].y);
						this.context.arc(this.mouse[(i - 1)].x,this.mouse[(i - 1)].y,this.coin_radius,0,this.a360);
						this.context.moveTo(this.mouse[i].x + (this.coin_radius * Math.cos(a + this.a90)),this.mouse[i].y + (this.coin_radius * Math.sin(a + this.a90)));
						this.context.lineTo(this.mouse[(i - 1)].x + (this.coin_radius * Math.cos(a + this.a90)),this.mouse[(i - 1)].y + (this.coin_radius * Math.sin(a + this.a90)));
						this.context.lineTo(this.mouse[(i - 1)].x + (this.coin_radius * Math.cos(a - this.a90)),this.mouse[(i - 1)].y + (this.coin_radius * Math.sin(a - this.a90)));
						this.context.lineTo(this.mouse[i].x + (this.coin_radius * Math.cos(a - this.a90)),this.mouse[i].y + (this.coin_radius * Math.sin(a - this.a90)));
						this.context.fill();
//						this.context.stroke();
						this.context.closePath();
					}
					this.context.restore();

					img = this.context.getImageData(this.lottery.x,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]),this.lottery.w,this.lottery.h * this.lottery.warea[1][1]);

					for(i = 0;i < img.data.length;i += 4){
						switch(true){
							case(this.lottery.scratch.data[(i + 3)] != parseInt(img.data[(i + 3)])):
								this.lottery.scratch.data[(i)] = parseInt(img.data[(i)]);
								this.lottery.scratch.data[(i + 1)] = parseInt(img.data[(i + 1)]);
								this.lottery.scratch.data[(i + 2)] = parseInt(img.data[(i + 2)]);
								this.lottery.scratch.data[(i + 3)] = parseInt(img.data[(i + 3)]);
							break;
						}
					}
				break;
			}
			switch(true){
				case(typeof this.lottery.scratch === "object"):
					this.context.save();
					this.context.globalCompositeOperation = "destination-over";
//					this.context.putImageData(this.lottery.limg,this.lottery.x,this.lottery.y);
//					this.context.putImageData(this.lottery.scratch,this.lottery.x,this.lottery.y + (this.lottery.h * this.lottery.warea[0][1]));
					ia = this.context.createImageData(this.lottery.w,this.lottery.h);
					di = 1200 * (this.lottery.h * this.lottery.warea[0][1]);
					for(i = 0;i < this.lottery.limg.data.length;i += 4){
						switch(true){
							case(i > di
							&& this.lottery.scratch.data[((i - di) + 3)] === 255):
								ia.data[(i)] = parseInt(this.lottery.scratch.data[(i - di)]);
								ia.data[(i + 1)] = parseInt(this.lottery.scratch.data[((i - di) + 1)]);
								ia.data[(i + 2)] = parseInt(this.lottery.scratch.data[((i - di) + 2)]);
								ia.data[(i + 3)] = parseInt(this.lottery.scratch.data[((i - di) + 3)]);
							break;
							default:
								ia.data[(i)] = parseInt(this.lottery.limg.data[(i)]);
								ia.data[(i + 1)] = parseInt(this.lottery.limg.data[(i + 1)]);
								ia.data[(i + 2)] = parseInt(this.lottery.limg.data[(i + 2)]);
								ia.data[(i + 3)] = parseInt(this.lottery.limg.data[(i + 3)]);
							break;
						}
					}
					this.context.putImageData(ia,this.lottery.x, this.lottery.y);
					this.context.restore();
				break;
			}
//			this.context.save();
//			this.context.fillStyle = "red";
//			this.context.beginPath();
//			this.context.arc(100,100,this.coin_radius,this.a360 - this.a90,(this.a360 - this.a90) + this.deg * 5);
//			this.context.lineTo(100,100);
//			this.context.closePath();
//			this.context.fill();
//			this.context.restore();
			this.context.save();
			this.context.beginPath();
			this.context.font = "20px arial";
			this.context.fillText(this.lottery.x + [],this.lottery.x - (this.context.measureText(this.lottery.x + []).width),this.lottery.y);
			this.context.fillText((this.lottery.x + this.lottery.w) + [],this.lottery.x + this.lottery.w,this.lottery.y);
			this.context.closePath();
			this.context.restore();
			switch(true){
				case(this.mouse.length > 0
				&& this.lottery.snum > 0):
//					vlog(this.lottery.snum);
					this.context.save();
					this.context.beginPath();
					this.context.fillStyle = "brown";
					this.context.arc(this.mouse[(this.lottery.snum - 1)].x,this.mouse[(this.lottery.snum - 1)].y,this.coin_radius,0,this.a360);
					this.context.fill();
					this.context.closePath();
					this.context.restore();
				break;
			}

			this.tobj = setTimeout(this.id + ".draw()",this.period);
			return false;
		}catch(e){
			elog(e,"system_.draw");
		}finally{
			delete(img);
			delete(i);
			delete(h);
			delete(w);
			delete(dx);
			delete(dy);
			delete(a);
			delete(text);
			delete(ia);
			delete(di);
		}
	};
};

function clear_memory(){
	clearTimeout(sys.tobj);
	delete(sys);
};

window.onload = function onload(){
	document.body.style.margin = px(0);
	sys = new system_();
	sys.init("sys","id:canvas;width:1000;height:400","lname<LKLSLEL LOTTERY TICKET/x<200/y<100/w<300/h<210/tfont<italic bold 18px Arial/tgrd<red,orange,yellow,yellowgreen,blue,violet,purple/bg<#cccccc/wbg<gold/wfont<16px impact/warea<0,0.20:0.60,0.80/bbg<orange/bfont<16px impact/barea<0.60,0.20:0.40,0.80/max<9/pon<10/wn<0  1  2  3  4  5  6  7  8  9/wp<★ ★ ★ ★ ★/pob<5/prob>100.0000",25,20,1,Math.floor(1000/20));
	return false;
};

window.onkeydown = function onkeydown(e){
//	console.log(e.which + ":" + String.fromCharCode(e.which));
	e.preventDefault();
	switch(true){
		case(e.which === 107):
			sys.coin_rd_add_degree(1);
		break;
		case(e.which === 109):
			sys.coin_rd_add_degree(-1);
		break;
	}
	return false;
};

window.onunload = clear_memory;
window.onhashchange = clear_memory;