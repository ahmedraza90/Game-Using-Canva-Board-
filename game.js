const _0x85c8c4=_0x346d;(function(_0x34446f,_0x2173a0){const _0x4b49c1=_0x346d,_0x2f41b0=_0x34446f();while(!![]){try{const _0x595989=-parseInt(_0x4b49c1(0x1f3))/0x1*(-parseInt(_0x4b49c1(0x1e6))/0x2)+parseInt(_0x4b49c1(0x218))/0x3*(parseInt(_0x4b49c1(0x252))/0x4)+parseInt(_0x4b49c1(0x208))/0x5*(parseInt(_0x4b49c1(0x225))/0x6)+-parseInt(_0x4b49c1(0x213))/0x7+-parseInt(_0x4b49c1(0x23f))/0x8+parseInt(_0x4b49c1(0x207))/0x9+-parseInt(_0x4b49c1(0x231))/0xa*(-parseInt(_0x4b49c1(0x203))/0xb);if(_0x595989===_0x2173a0)break;else _0x2f41b0['push'](_0x2f41b0['shift']());}catch(_0x3c79e8){_0x2f41b0['push'](_0x2f41b0['shift']());}}}(_0x4c75,0xd78b8));let board,blurz;boardWidth=Math[_0x85c8c4(0x1ea)](0x168,window[_0x85c8c4(0x205)]),boardHeight=Math[_0x85c8c4(0x1ea)](0x280,window[_0x85c8c4(0x1f0)]);let context,birdWidth=0x40,birdHeight=0x36,birdX=boardWidth/0x8,birdY=boardHeight/0x2,birdImg,bird={'x':birdX,'y':birdY,'width':birdWidth,'height':birdHeight},pipeArray=[],pipeWidth=0x40,pipeHeight=0x200,pipeX=boardWidth,pipeY=0x0,topPipeImg,bottomPipeImg,pipeInterval,velocityX=-0x2,velocityY=0x0,gravity=0.4,gameOver=![],score=0x0;var gameStarted=![];let walletConnect=![],walletAddress='',jumpSound=new Audio(_0x85c8c4(0x229)),collisionSound=new Audio(_0x85c8c4(0x22a)),pointSound=new Audio(_0x85c8c4(0x247));window[_0x85c8c4(0x20d)]=function(){const _0x9e67a3=_0x85c8c4;board=document[_0x9e67a3(0x233)](_0x9e67a3(0x240)),board[_0x9e67a3(0x1e3)]=boardHeight,board[_0x9e67a3(0x23d)]=boardWidth,context=board[_0x9e67a3(0x1f4)]('2d'),birdImg=new Image(),birdImg[_0x9e67a3(0x22c)]='./Italian_Mafia_Boss_alpha.png',birdImg['onload']=function(){const _0x2dc4d8=_0x9e67a3;context['drawImage'](birdImg,bird['x'],bird['y'],bird['width'],bird[_0x2dc4d8(0x1e3)]);},topPipeImg=new Image(),topPipeImg[_0x9e67a3(0x22c)]='./toppipe.png',bottomPipeImg=new Image(),bottomPipeImg[_0x9e67a3(0x22c)]='./bottompipe.png',start();};function _0x346d(_0x56c0db,_0x205570){const _0x4c751a=_0x4c75();return _0x346d=function(_0x346d38,_0x1940e0){_0x346d38=_0x346d38-0x1e1;let _0x14d223=_0x4c751a[_0x346d38];return _0x14d223;},_0x346d(_0x56c0db,_0x205570);}function start(){const _0x5ce4c7=_0x85c8c4;board=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x240)),blurz=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x204));var _0x44ffa8=document['getElementById']('myModal'),_0x29a63a=document['getElementById'](_0x5ce4c7(0x223)),_0x658cf1=document[_0x5ce4c7(0x233)]('connectButton'),_0x5e5c5e=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x235)),_0x334243=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x255)),_0x3af261=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x23b)),_0x2946fe=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x206)),_0x1741a4=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x215)),_0x53f39c=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x1ef)),_0x2874cb=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x239)),_0x2dfcaf=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x21d)),_0xcf735=document[_0x5ce4c7(0x233)]('leaderButton'),_0x2dc6b2=document['getElementById'](_0x5ce4c7(0x21b));const _0x4487e9=document['getElementById'](_0x5ce4c7(0x21e));var _0x342f4c=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x22f)),_0x333e39=document[_0x5ce4c7(0x233)](_0x5ce4c7(0x1f1));_0x334243['addEventListener'](_0x5ce4c7(0x1f5),createAcc),_0x658cf1['addEventListener'](_0x5ce4c7(0x1f5),connectWallet),_0x658cf1[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x248),connectWallet),_0x5e5c5e[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),shareOnTwitter),_0x53f39c[_0x5ce4c7(0x1ed)]('click',()=>{const _0x12030e=_0x5ce4c7;score=0x0,board[_0x12030e(0x242)][_0x12030e(0x1e4)]=_0x12030e(0x1e5),blurz[_0x12030e(0x242)][_0x12030e(0x1e4)]='block',startGame();}),_0x2874cb[_0x5ce4c7(0x1ed)]('click',()=>{const _0x5c6d28=_0x5ce4c7;score=0x0,board['style']['display']=_0x5c6d28(0x1e5),blurz[_0x5c6d28(0x242)][_0x5c6d28(0x1e4)]=_0x5c6d28(0x1e5),startGame();}),_0xcf735['addEventListener']('click',()=>{get_leaderBoard_data(),displayLeaderboard();}),_0x2dc6b2[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),()=>{const _0x4dae0e=_0x5ce4c7;topScore(),_0x2dfcaf[_0x4dae0e(0x242)][_0x4dae0e(0x1e4)]=_0x4dae0e(0x251),_0x333e39[_0x4dae0e(0x242)][_0x4dae0e(0x1e4)]='block';}),_0x4487e9[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),()=>{const _0x56bf14=_0x5ce4c7;topScore(),_0x342f4c[_0x56bf14(0x242)]['display']='none',_0x333e39[_0x56bf14(0x242)][_0x56bf14(0x1e4)]='block';}),_0x3af261[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),()=>{const _0x573374=_0x5ce4c7;location[_0x573374(0x246)]();}),_0x2946fe[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),()=>{const _0x1d5886=_0x5ce4c7;location[_0x1d5886(0x246)]();}),_0x1741a4[_0x5ce4c7(0x1ed)](_0x5ce4c7(0x1f5),()=>{const _0x496dd2=_0x5ce4c7;location[_0x496dd2(0x246)]();}),typeof window['ethereum']!==_0x5ce4c7(0x1e9)?(_0x658cf1[_0x5ce4c7(0x242)][_0x5ce4c7(0x1e4)]=_0x5ce4c7(0x1e5),_0x44ffa8[_0x5ce4c7(0x242)]['display']='block'):(_0x29a63a[_0x5ce4c7(0x242)][_0x5ce4c7(0x1e4)]=_0x5ce4c7(0x1e5),_0x44ffa8['style'][_0x5ce4c7(0x1e4)]=_0x5ce4c7(0x1e5),console[_0x5ce4c7(0x256)](_0x5ce4c7(0x209)));}function fetchUser(_0x298992){const _0x34f7c2=_0x85c8c4,_0xbe5eb8=document[_0x34f7c2(0x233)](_0x34f7c2(0x219)),_0x56f95f=document[_0x34f7c2(0x233)](_0x34f7c2(0x228));_0xbe5eb8[_0x34f7c2(0x212)]='',_0x56f95f[_0x34f7c2(0x212)]='',fetch(_0x34f7c2(0x202)+_0x298992,{'method':_0x34f7c2(0x234),'headers':{'Content-Type':'application/json'}})[_0x34f7c2(0x227)](_0x4c07cd=>_0x4c07cd[_0x34f7c2(0x241)]())[_0x34f7c2(0x227)](_0x2d21dc=>{const _0x4922d1=_0x34f7c2;console[_0x4922d1(0x256)](_0x4922d1(0x1eb),_0x2d21dc),_0x56f95f['innerHTML']=_0x4922d1(0x1f8)+_0x2d21dc[_0x4922d1(0x228)]+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0xbe5eb8[_0x4922d1(0x212)]=_0x4922d1(0x1f8)+_0x2d21dc[_0x4922d1(0x237)]+_0x4922d1(0x1f9)+compressAddress(_0x2d21dc['walletAddress'],0x5,0x4)+_0x4922d1(0x1fe);})[_0x34f7c2(0x224)](_0x16f004=>{const _0x38bbe9=_0x34f7c2;console[_0x38bbe9(0x226)]('Error:',_0x16f004);});}function topScore(){const _0x2e93c1=_0x85c8c4,_0x50a030=document['getElementById'](_0x2e93c1(0x230));_0x50a030['innerHTML']='',fetch(_0x2e93c1(0x1e8),{'method':'GET','headers':{'Content-Type':_0x2e93c1(0x23c)}})[_0x2e93c1(0x227)](_0x64fd2b=>_0x64fd2b[_0x2e93c1(0x241)]())[_0x2e93c1(0x227)](_0x1fd334=>{const _0x8671=_0x2e93c1;console['log'](_0x8671(0x1eb),_0x1fd334[_0x8671(0x257)][0x0][_0x8671(0x217)]),_0x50a030[_0x8671(0x212)]=_0x8671(0x22d)+_0x1fd334[_0x8671(0x257)][0x0][_0x8671(0x217)]+'\x20</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22><span\x20style=\x22color:\x20#ff4655;\x22>USER</span><span\x20style=\x22color:\x20#f2f2f2;\x22>\x20#\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x1fd334[_0x8671(0x257)][0x0][_0x8671(0x228)]+'</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';})['catch'](_0x51c4cd=>{const _0x1b7be6=_0x2e93c1;console[_0x1b7be6(0x226)]('Error:',_0x51c4cd);});}function get_leaderBoard_data(){const _0x1e1663=_0x85c8c4,_0x533ef2=document[_0x1e1663(0x233)](_0x1e1663(0x24b)),_0x4ad1c0=document[_0x1e1663(0x233)](_0x1e1663(0x21a)),_0x36efd9=document[_0x1e1663(0x233)](_0x1e1663(0x1e2));_0x533ef2['innerHTML']='',_0x4ad1c0[_0x1e1663(0x212)]='',_0x36efd9[_0x1e1663(0x212)]='',fetch('https://qr-code-api.oasisx.world/flappy-get-all-user',{'method':_0x1e1663(0x234),'headers':{'Content-Type':_0x1e1663(0x23c)}})['then'](_0xf7abde=>_0xf7abde['json']())[_0x1e1663(0x227)](_0x956559=>{const _0x4dffef=_0x1e1663;console[_0x4dffef(0x256)](_0x4dffef(0x1eb),_0x956559[_0x4dffef(0x257)]);let _0x50b7e9=_0x956559['scores'][_0x4dffef(0x24e)]((_0x2b18a6,_0x232ec6)=>{const _0x130f4a=_0x4dffef;return'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x20color:\x20#ff4655;\x22><span>'+(_0x232ec6+0x1)+_0x130f4a(0x243)+_0x2b18a6[_0x130f4a(0x228)]+'</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200%;\x20color:\x20#f2f2f2;\x22>'+_0x2b18a6[_0x130f4a(0x217)]+_0x130f4a(0x1ff);})[_0x4dffef(0x221)]('');_0x533ef2[_0x4dffef(0x212)]=_0x50b7e9;let _0x39127f,_0x3b77f5;_0x956559[_0x4dffef(0x257)][_0x4dffef(0x24e)]((_0x37e9c2,_0x340bf1)=>{const _0x42bf09=_0x4dffef;_0x37e9c2[_0x42bf09(0x1ee)]==walletAddress&&(_0x39127f=_0x37e9c2[_0x42bf09(0x217)],_0x3b77f5=_0x340bf1+0x1);}),_0x4ad1c0[_0x4dffef(0x212)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22background:\x20white;\x20border:\x20none;\x20height:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22yourScore\x22style=\x22color:\x20#f2f2f2;\x20font-size:\x2020px;\x22>\x20YOUR\x20SCORE\x20'+_0x39127f+_0x4dffef(0x1f7),_0x36efd9['innerHTML']=_0x4dffef(0x23a)+_0x3b77f5+_0x4dffef(0x211);})[_0x1e1663(0x224)](_0x6b661b=>{const _0x2fc128=_0x1e1663;console[_0x2fc128(0x226)](_0x2fc128(0x244),_0x6b661b);});}function leaderBoard_data(_0x522d9f=0x0){const _0x116030=_0x85c8c4,_0x3f6056=document[_0x116030(0x233)](_0x116030(0x24b)),_0x5d689a=document[_0x116030(0x233)](_0x116030(0x21a)),_0xecfd6d=document[_0x116030(0x233)](_0x116030(0x1e2));_0x3f6056[_0x116030(0x212)]='',_0x5d689a[_0x116030(0x212)]='',_0xecfd6d[_0x116030(0x212)]='',fetch(_0x116030(0x201),{'method':_0x116030(0x1f6),'headers':{'Content-Type':_0x116030(0x23c)},'body':JSON['stringify']({'walletAddress':''+walletAddress,'score':_0x522d9f})})[_0x116030(0x227)](_0x4e74bd=>_0x4e74bd[_0x116030(0x241)]())[_0x116030(0x227)](_0xf0f231=>{const _0x13af58=_0x116030;console['log'](_0x13af58(0x1eb),_0xf0f231['0']);let _0x2ff260=_0xf0f231['0']['map']((_0x469871,_0x581d27)=>{const _0x42f720=_0x13af58;return'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x20color:\x20rgb(57,\x20130,\x200);\x22><span>'+(_0x581d27+0x1)+'</span>#<span>'+_0x469871[_0x42f720(0x228)]+_0x42f720(0x1f2)+_0x469871[_0x42f720(0x217)]+_0x42f720(0x1e7);})[_0x13af58(0x221)]('');_0x3f6056[_0x13af58(0x212)]=_0x2ff260;let _0x4d907e,_0x47ba7a;_0xf0f231['0'][_0x13af58(0x24e)]((_0x2a2ec4,_0x4caa0b)=>{const _0x3fcf7d=_0x13af58;_0x2a2ec4[_0x3fcf7d(0x1ee)]==walletAddress&&(_0x4d907e=_0x2a2ec4[_0x3fcf7d(0x217)],_0x47ba7a=_0x4caa0b+0x1);}),_0x5d689a[_0x13af58(0x212)]=_0x13af58(0x249)+_0x4d907e+_0x13af58(0x1f7),_0xecfd6d['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#f2f2f2;\x20font-size:\x2020px;\x22>\x20\x20RANK\x20#\x20'+_0x47ba7a+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';})[_0x116030(0x224)](_0x44d017=>{const _0x1ed1ea=_0x116030;console[_0x1ed1ea(0x226)](_0x1ed1ea(0x244),_0x44d017);});}function connectWallet(){const _0x1be30d=_0x85c8c4;var _0x395561=document['getElementById']('myModal'),_0x129b50=document['getElementById']('profile'),_0x1794c7=document[_0x1be30d(0x233)](_0x1be30d(0x24f));ethereum[_0x1be30d(0x220)]({'method':_0x1be30d(0x1e1)})[_0x1be30d(0x227)](function(_0x302541){const _0x4efc91=_0x1be30d;walletAddress=_0x302541[0x0],console[_0x4efc91(0x256)]('Wallet\x20connected:',_0x302541[0x0]),fetch(_0x4efc91(0x1fd),{'method':_0x4efc91(0x1f6),'headers':{'Content-Type':_0x4efc91(0x23c)},'body':JSON['stringify']({'walletAddress':''+_0x302541[0x0]})})[_0x4efc91(0x227)](_0x4089c6=>_0x4089c6[_0x4efc91(0x241)]())[_0x4efc91(0x227)](_0x1d4ed0=>{const _0x527271=_0x4efc91;_0x395561[_0x527271(0x242)][_0x527271(0x1e4)]='none',_0x1d4ed0[_0x527271(0x23e)]==='User\x20already\x20registered'?(_0x129b50[_0x527271(0x242)][_0x527271(0x1e4)]=_0x527271(0x1e5),fetchUser(_0x302541[0x0]),topScore()):_0x1794c7[_0x527271(0x242)][_0x527271(0x1e4)]=_0x527271(0x1e5);})[_0x4efc91(0x224)](_0x3ad109=>{console['error']('Error:',_0x3ad109);});})[_0x1be30d(0x224)](function(_0x11ab8a){const _0x13c11d=_0x1be30d;console['error'](_0x13c11d(0x232),_0x11ab8a);});}function createAcc(){const _0x2331da=_0x85c8c4;var _0x463bb7=document[_0x2331da(0x233)](_0x2331da(0x24f)),_0x5d9602=document[_0x2331da(0x233)](_0x2331da(0x1f1)),_0x57f83b='',_0x134325='';const _0x33a54e=document[_0x2331da(0x233)](_0x2331da(0x21c)),_0x21368d=document['getElementById']('email');var _0x57f83b=_0x33a54e[_0x2331da(0x254)],_0x134325=_0x21368d[_0x2331da(0x254)];topScore(),_0x57f83b[_0x2331da(0x20c)]>0x0&&fetch(_0x2331da(0x1fd),{'method':_0x2331da(0x1f6),'headers':{'Content-Type':'application/json'},'body':JSON[_0x2331da(0x22b)]({'walletAddress':walletAddress,'userName':_0x57f83b,'email':_0x134325})})[_0x2331da(0x227)](_0x32d89b=>_0x32d89b[_0x2331da(0x241)]())[_0x2331da(0x227)](_0x534996=>{const _0x362b25=_0x2331da;_0x463bb7[_0x362b25(0x242)][_0x362b25(0x1e4)]=_0x362b25(0x251),_0x5d9602[_0x362b25(0x242)][_0x362b25(0x1e4)]=_0x362b25(0x1e5),fetchUser(walletAddress);})[_0x2331da(0x224)](_0x5cd5a0=>{const _0x33bcb2=_0x2331da;console[_0x33bcb2(0x226)](_0x33bcb2(0x244),_0x5cd5a0);});}function startGame(){const _0x24e049=_0x85c8c4;var _0x3b931b=document['getElementById'](_0x24e049(0x22f)),_0xb00661=document['getElementById'](_0x24e049(0x1f1)),_0x143c0a=document['getElementById'](_0x24e049(0x21d));_0x3b931b[_0x24e049(0x242)][_0x24e049(0x1e4)]=_0x24e049(0x251),_0xb00661[_0x24e049(0x242)][_0x24e049(0x1e4)]='none',_0x143c0a[_0x24e049(0x242)]['display']='none',pipeInterval&&clearInterval(pipeInterval),gameStarted=![],gameOver=![],requestAnimationFrame(update),pipeInterval=setInterval(placePipes,0x5dc),document[_0x24e049(0x1ed)](_0x24e049(0x21f),function(_0x135ad7){const _0x3619e7=_0x24e049;_0x135ad7[_0x3619e7(0x1fa)]==='Space'&&(gameStarted=!![]),moveBird(_0x135ad7);}),document[_0x24e049(0x1ed)](_0x24e049(0x248),function(_0x11cec1){gameStarted=!![],moveBird(_0x11cec1);});}function _0x4c75(){const _0x23f250=['Success:','play','addEventListener','walletAddress','playNow','innerHeight','profile','</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200%;\x20color:\x20#f2f2f2;\x22>','817223xGSUkB','getContext','click','POST','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22background:\x20white;\x20border:\x20none;\x20height:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22>','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200%;\x22>','code','random','passed','https://qr-code-api.oasisx.world/flappy-save','.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22margin:\x2015px\x20auto\x2015px\x20auto;\x20border-color:\x20white;\x20width:\x20100%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','substring','https://qr-code-api.oasisx.world/flappy-update','https://qr-code-api.oasisx.world/flappy-get-user/','5853474sxjxLe','blur','innerWidth','DisconnectButtonCreate','2888154QODTNH','745fXPxBa','please\x20install\x20metamask','black','max','length','onload','fillStyle','type','ArrowUp','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','innerHTML','10188535WizpBZ','font','DisconnectButtonLeader','fillText','score','255zgbEjM','user','yourScore','leaderButtonOver','name','gameOver','backProfile','keydown','request','join','\x20points\x20in\x20my\x20addictive\x20Flappy\x20Bird\x20🐦\x20game.\x20Collect\x20\x27PEPE\x27\x20crypto\x20tokens,\x20Conquer\x20tough\x20obstacles,\x20and\x20compete\x20for\x20the\x20$1500\x20USDC\x20prize\x20pool💰.\x20\x0a\x0aCan\x20you\x20beat\x20my\x20score?\x20\x0aJoin\x20the\x20fun:\x20https://pepe-flappy.netlify.app/\x20🌐\x0a\x0a🔥#FlappyBird\x20#web3gaming','NometaMask','catch','7332bPOfxn','error','then','userName','flap.mp3','flappy-bird-hit-sound.mp3','stringify','src','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22>\x20<span\x20style=\x22color:\x20#ff4655\x22>TOP\x20SCORE\x20#</span><span\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22color:\x20#f2f2f2;\x22>\x20','width=550,height=420','leaderboardModal','topScore','10NaYLQC','Wallet\x20connection\x20error:','getElementById','GET','shareButton','45px\x20\x27Silkscreen\x27,\x20cursive','email','open','playAgain','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#f2f2f2;\x20font-size:\x2018px\x22>\x20\x20RANK\x20#\x20','DisconnectButtonProfile','application/json','width','message','9110176mPqyWd','board','json','style','</span>#<span>','Error:','shift','reload','point.mp3','touchstart','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22background:\x20white;\x20border:\x20none;\x20height:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22yourScore\x22style=\x22color:\x20#f2f2f2;\x20font-size:\x2025px;\x22>\x20YOUR\x20SCORE\x20','KeyX','leaderboardBody','...','push','map','create','drawImage','none','38004fUQFev','clearRect','value','CreateAccount','log','scores','eth_requestAccounts','yourRank','height','display','block','4pYvXeQ','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22margin:\x2015px\x20auto\x2015px\x20auto;\x20border-color:\x20rgb(57,\x20130,\x200);\x20width:\x20100%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','https://qr-code-api.oasisx.world/flappy-get-all-user','undefined','min'];_0x4c75=function(){return _0x23f250;};return _0x4c75();}function update(){const _0x53496c=_0x85c8c4;if(gameOver)return;requestAnimationFrame(update);if(!gameStarted)return;context[_0x53496c(0x253)](0x0,0x0,board[_0x53496c(0x23d)],board[_0x53496c(0x1e3)]),velocityY+=gravity,bird['y']=Math[_0x53496c(0x20b)](bird['y']+velocityY,0x0),context[_0x53496c(0x250)](birdImg,bird['x'],bird['y'],bird[_0x53496c(0x23d)],bird[_0x53496c(0x1e3)]);bird['y']>board[_0x53496c(0x1e3)]&&(gameOver=!![]);for(let _0x41e345=0x0;_0x41e345<pipeArray[_0x53496c(0x20c)];_0x41e345++){let _0x20b7d9=pipeArray[_0x41e345];_0x20b7d9['x']+=velocityX,context[_0x53496c(0x250)](_0x20b7d9['img'],_0x20b7d9['x'],_0x20b7d9['y'],_0x20b7d9[_0x53496c(0x23d)],_0x20b7d9[_0x53496c(0x1e3)]),!_0x20b7d9[_0x53496c(0x1fc)]&&bird['x']>_0x20b7d9['x']+_0x20b7d9['width']&&(score+=0.5,pointSound[_0x53496c(0x1ec)](),_0x20b7d9[_0x53496c(0x1fc)]=!![]),detectCollision(bird,_0x20b7d9)&&(collisionSound[_0x53496c(0x1ec)](),gameOver=!![]);}while(pipeArray[_0x53496c(0x20c)]>0x0&&pipeArray[0x0]['x']<-pipeWidth){pipeArray[_0x53496c(0x245)]();}context[_0x53496c(0x20e)]=_0x53496c(0x20a),context[_0x53496c(0x214)]=_0x53496c(0x236),context[_0x53496c(0x216)](score,0x5,0x2d);if(gameOver){bird['y']=birdY,pipeArray=[],velocityY=0x0,velocityX=-0x2,gravity=0.4,leaderBoard_data(score),topScore(),displayLeaderboard();return;}}function placePipes(){const _0x51b699=_0x85c8c4;if(gameOver)return;if(!gameStarted)return;let _0x12fd06=pipeY-pipeHeight/0x4-Math[_0x51b699(0x1fb)]()*(pipeHeight/0x2),_0x1bd94e=board[_0x51b699(0x1e3)]/0x4,_0x3368a5={'img':topPipeImg,'x':pipeX,'y':_0x12fd06,'width':pipeWidth,'height':pipeHeight,'passed':![]};pipeArray[_0x51b699(0x24d)](_0x3368a5);let _0x1a37f5={'img':bottomPipeImg,'x':pipeX,'y':_0x12fd06+pipeHeight+_0x1bd94e,'width':pipeWidth,'height':pipeHeight,'passed':![]};pipeArray[_0x51b699(0x24d)](_0x1a37f5);}function moveBird(_0x26f669){const _0x2ba1d7=_0x85c8c4;!gameOver&&((_0x26f669[_0x2ba1d7(0x1fa)]=='Space'||_0x26f669[_0x2ba1d7(0x1fa)]==_0x2ba1d7(0x210)||_0x26f669[_0x2ba1d7(0x1fa)]==_0x2ba1d7(0x24a)||_0x26f669[_0x2ba1d7(0x20f)]===_0x2ba1d7(0x248))&&(jumpSound[_0x2ba1d7(0x1ec)](),velocityY=-0x6));}function detectCollision(_0x4dde3b,_0x3d4496){const _0x3dfcd8=_0x85c8c4;return _0x4dde3b['x']<_0x3d4496['x']+_0x3d4496[_0x3dfcd8(0x23d)]&&_0x4dde3b['x']+_0x4dde3b[_0x3dfcd8(0x23d)]>_0x3d4496['x']&&_0x4dde3b['y']<_0x3d4496['y']+_0x3d4496[_0x3dfcd8(0x1e3)]&&_0x4dde3b['y']+_0x4dde3b['height']>_0x3d4496['y'];}function compressAddress(_0x48046a,_0x36e020,_0x54ea28,_0x4bd8b3=_0x85c8c4(0x24c)){const _0x53f164=_0x85c8c4;return _0x48046a['substring'](0x0,_0x36e020)+_0x4bd8b3+_0x48046a[_0x53f164(0x200)](_0x48046a[_0x53f164(0x20c)]-_0x54ea28);}function displayLeaderboard(){const _0x31b23d=_0x85c8c4;var _0x1b89e6=document[_0x31b23d(0x233)](_0x31b23d(0x22f)),_0x7425ae=document[_0x31b23d(0x233)](_0x31b23d(0x1f1)),_0x167edb=document[_0x31b23d(0x233)](_0x31b23d(0x21d));board=document['getElementById'](_0x31b23d(0x240)),blurz=document[_0x31b23d(0x233)](_0x31b23d(0x204));if(!gameOver)_0x7425ae[_0x31b23d(0x242)]['display']='none',_0x1b89e6[_0x31b23d(0x242)][_0x31b23d(0x1e4)]=_0x31b23d(0x1e5);else board[_0x31b23d(0x242)][_0x31b23d(0x1e4)]===_0x31b23d(0x1e5)?(board['style']['display']=_0x31b23d(0x251),blurz[_0x31b23d(0x242)][_0x31b23d(0x1e4)]=_0x31b23d(0x251),_0x167edb['style'][_0x31b23d(0x1e4)]=_0x31b23d(0x1e5)):(_0x7425ae['style'][_0x31b23d(0x1e4)]=_0x31b23d(0x251),_0x1b89e6[_0x31b23d(0x242)][_0x31b23d(0x1e4)]=_0x31b23d(0x1e5));}function shareOnTwitter(){const _0x60ced2=_0x85c8c4;twitterText='🚀Just\x20hit\x20'+score+_0x60ced2(0x222);const _0x3fece3='https://twitter.com/intent/tweet?text='+encodeURIComponent(twitterText);window[_0x60ced2(0x238)](_0x3fece3,'_blank',_0x60ced2(0x22e));}