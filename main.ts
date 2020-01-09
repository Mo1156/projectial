function projectial () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 5 5 5 5 5 5 4 4 4 . . 
. 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 
. . 4 5 5 5 5 5 5 5 5 5 5 5 4 4 
. . 4 4 4 4 5 5 5 5 5 5 5 5 4 . 
. . . . . 4 4 4 4 5 5 5 5 4 4 . 
. . . . . . . . 4 4 4 4 4 4 . . 
. . . . . . . . . . . . . . . . 
`, 50, 100)
    projectile.setPosition(0, Math.randomRange(0, 120))
}
function background () {
    scene.setBackgroundColor(1)
}
function player () {
    player_awesome = sprites.create(img`
. . . . . . f f f f f f f . . . 
. . . f f f f 7 7 7 7 7 f f . . 
. . f f 7 7 7 7 7 7 7 7 7 f f f 
f f f 7 7 7 7 7 . . 7 7 7 7 7 f 
7 7 7 7 7 7 . . . . . 7 7 7 7 f 
7 7 7 7 . . . . . . . . . 7 7 f 
. . . . . . . . . . . . . 7 7 7 
. . . . . . . . . . . . . 7 7 7 
7 7 7 7 . . . . . . . . . . 7 7 
7 7 7 7 7 . . . . . . . . . 7 7 
f f 7 7 7 7 7 7 . . . . . 7 7 7 
. f f 7 7 7 7 7 . . . . 7 7 7 7 
. . f f f f 7 7 7 7 7 7 7 7 7 7 
. . . . . f f 7 7 7 7 7 7 7 7 f 
. . . . . . f f f f 7 7 7 7 f f 
. . . . . . . . . f f f f f f . 
`, SpriteKind.Player)
    player_awesome.setPosition(78, 101)
    controller.moveSprite(player_awesome, 100, 100)
}
let player_awesome: Sprite = null
let projectile: Sprite = null
player()
projectial()
background()
game.onUpdate(function () {
	
})
