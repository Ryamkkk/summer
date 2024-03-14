var curcontent = new Array();
curcontent["kit-lite"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories-1">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary active">LITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-summer\', false);">SUMMER</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-newyear\', false);">NEWYEAR</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x7000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x6500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 12ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Рейд" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png">\
<div class="kit-item__quantity">x8</div></div></div>\
</div></div></div>'
};

curcontent["kit-prem"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories-1">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-lite\', false);">LITE</button>\
    <button class="btn btn-secondary active">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-summer\', false);">SUMMER</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-newyear\', false);">NEWYEAR</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x25</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x12000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x15</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 12ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Рейд" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.explosive.png">\
<div class="kit-item__quantity">x128</div></div></div>\
</div></div></div>'
};

curcontent["kit-summer"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories-1">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-lite\', false);">LITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary active">SUMMER</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-newyear\', false);">NEWYEAR</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x25</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 12ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Рейд" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["kit-newyear"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories-1">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-lite\', false);">LITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-summer\', false);">SUMMER</button>\
	<button class="btn btn-secondary active">NEWYEAR</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x1250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x1250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x40</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "NEWYEAR" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.lights.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.star.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.gingerbreadmen.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.pinecone.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.baubels.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.tinsel.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.decoration.candycanes.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.tree.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.door.garland.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/giantlollipops.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/snowmachine.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmasdoorwreath.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stocking.small.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmasdoorwreath.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/snowman.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/easterdoorwreath.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.lightstring.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.window.garland.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x100</div></div></div>\
</div></div></div>'
};

curcontent["kit-free"] = {
    xhead: 'Стандартные киты',
    xcon: '<div class="store-categories-1">\
	<button class="btn btn-secondary active">Стандартные</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-lite\', false);">LITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-summer\', false);">SUMMER</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-newyear\', false);">NEWYEAR</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/door.hinged.metal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cupboard.tool.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lock.code.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sleepingbag.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/building.planner.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Starter" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/attire.hide.pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/attire.hide.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/attire.hide.poncho.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/attire.hide.vest.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/deer.skull.mask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/burlap.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/spear.wooden.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div>\
<div class="serverheader">Кит "Медицина" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div>\
<div class="serverheader">Кит за "#SUMMER" в нике - <span>1 раз в вайп</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

/*curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};*/

//var BlockListArrays = [['shotgun.waterpipe', 'pistol.revolver'], ['pistol.python', 'pistol.semiauto', 'pistol.prototype17', 'pistol.m92', 'shotgun.double', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'], ['shotgun.pump', 'shotgun.spas12', 'smg.2', 'smg.thompson', 'smg.mp5', 'rifle.semiauto', 'rifle.m39'], ['rifle.ak', 'rifle.ak.ice', 'rifle.lr300', 'rifle.bolt', 'rifle.l96', 'hmlmg', 'metal.facemask', 'metal.plate.torso', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], ['lmg.m249', 'grenade.f1', 'grenade.beancan'], ['explosive.satchel', 'ammo.rifle.explosive', 'multiplegrenadelauncher'], ['rocket.launcher', 'explosive.timed']];

//#endregion

refilAmountInput = "Введите сумму"
refilButton = "ПОПОЛНИТЬ"
contactButton = "СВЯЗАТЬСЯ"

curcontent["Oplata"] = {
    xcon: '\
    	<div class="refill-window__header">\
    		<div class="refill-window__title">Пополнение баланса</div>\
    		<button class="refill-window__close">×</button>\
    	</div>\
    	<div class="refill-window__footer"><div class="refill-window__content">\
    		<div class="refill-window__payments">\
    			<ul class="refill-window__payments-list">\
                <li class="refill-window__payment" onclick="OnClickElement1(this)">\
    				<button class="refill-window__payment-btn" id="element1">\
                    <svg width="110" height="35" fill="none"><path d="M10.695 5.12H3.68v4.83h5.75v1.61H3.68V18H1.84V3.51h8.855v1.61zM21.39 18l-3.45-5.98h-2.76V18h-1.84V3.51h5.405c1.196 0 2.223.422 3.082 1.265s1.288 1.84 1.288 2.99c0 .629-.115 1.204-.345 1.725-.215.506-.475.905-.782 1.196a6.627 6.627 0 01-.943.713c-.307.2-.575.33-.805.391l-.322.115L23.46 18h-2.07zM15.18 5.12v5.29h3.565c.69 0 1.28-.253 1.771-.759a2.61 2.61 0 00.759-1.886c0-.736-.253-1.357-.759-1.863-.49-.521-1.081-.782-1.771-.782H15.18zm12.758 11.27h7.59V18h-9.43V3.51h9.2v1.61h-7.36v4.6h6.785v1.61h-6.785v5.06zm12.42 0h7.59V18h-9.43V3.51h9.2v1.61h-7.36v4.6h6.786v1.61h-6.785v5.06z" fill="#FA5745"></path><path d="M52.78 3.51V18h-1.84V3.51h1.84zM58.875 18l-6.095-7.36 5.635-7.13H60.6l-5.75 7.13L61.06 18h-2.185zm12.757 0l-1.38-3.565h-5.98L62.892 18h-1.956l5.52-14.49h1.61L73.587 18h-1.954zm-4.37-11.5l-2.415 6.325h4.83L67.26 6.5zm7.355.805c0-1.012.452-1.917 1.357-2.714.905-.797 2.024-1.196 3.358-1.196 1.257 0 2.315.43 3.174 1.288.874.843 1.311 1.87 1.311 3.082h-1.84c0-.797-.253-1.457-.759-1.978-.506-.521-1.135-.782-1.886-.782-.828 0-1.518.238-2.07.713-.537.46-.805.989-.805 1.587 0 .644.26 1.165.782 1.564.537.399 1.18.713 1.932.943.751.215 1.503.46 2.254.736.767.276 1.41.72 1.932 1.334.537.598.805 1.372.805 2.323 0 1.073-.445 1.993-1.334 2.76-.89.767-2.055 1.15-3.496 1.15-1.472 0-2.645-.406-3.519-1.219-.874-.813-1.311-1.863-1.311-3.151h1.84c0 .874.253 1.556.759 2.047.521.475 1.265.713 2.231.713.935 0 1.664-.215 2.185-.644.537-.445.805-.997.805-1.656 0-.644-.268-1.165-.805-1.564-.521-.399-1.158-.705-1.909-.92-.751-.23-1.51-.483-2.277-.759a4.769 4.769 0 01-1.932-1.311c-.521-.613-.782-1.395-.782-2.346zm11.388 0c0-1.012.452-1.917 1.357-2.714.904-.797 2.024-1.196 3.358-1.196 1.257 0 2.315.43 3.174 1.288.874.843 1.31 1.87 1.31 3.082h-1.84c0-.797-.252-1.457-.758-1.978-.506-.521-1.135-.782-1.886-.782-.828 0-1.518.238-2.07.713-.537.46-.805.989-.805 1.587 0 .644.26 1.165.782 1.564.536.399 1.18.713 1.932.943.751.215 1.502.46 2.254.736.766.276 1.41.72 1.932 1.334.536.598.805 1.372.805 2.323 0 1.073-.445 1.993-1.334 2.76-.89.767-2.055 1.15-3.496 1.15-1.472 0-2.645-.406-3.52-1.219-.873-.813-1.31-1.863-1.31-3.151h1.84c0 .874.253 1.556.759 2.047.521.475 1.265.713 2.23.713.936 0 1.664-.215 2.186-.644.536-.445.805-.997.805-1.656 0-.644-.269-1.165-.805-1.564-.522-.399-1.158-.705-1.91-.92-.75-.23-1.51-.483-2.276-.759a4.769 4.769 0 01-1.932-1.311c-.522-.613-.782-1.395-.782-2.346zM107.052 18l-1.38-3.565h-5.98L98.312 18h-1.955l5.52-14.49h1.61l5.52 14.49h-1.955zm-4.37-11.5l-2.415 6.325h4.83L102.682 6.5z" fill="#fff"></path><path d="M2.394 25.24c-.383.42-.574.957-.574 1.61 0 .653.191 1.19.574 1.61.383.42.845.63 1.386.63.541 0 1.003-.21 1.386-.63.383-.42.574-.957.574-1.61 0-.653-.191-1.19-.574-1.61-.383-.42-.845-.63-1.386-.63-.541 0-1.003.21-1.386.63zM1.68 23.7l.28.7c.047-.056.117-.126.21-.21.093-.084.303-.196.63-.336.327-.15.677-.224 1.05-.224.821 0 1.517.303 2.086.91.57.607.854 1.377.854 2.31s-.285 1.703-.854 2.31c-.57.607-1.265.91-2.086.91-.373 0-.719-.07-1.036-.21-.308-.14-.527-.28-.658-.42l-.196-.21v3.01H.91V23.7h.77zm8.883-.07c.691 0 1.26.21 1.708.63.448.42.672.933.672 1.54V30h-.77l-.28-.7a2.175 2.175 0 01-.21.21c-.093.084-.303.2-.63.35-.326.14-.676.21-1.05.21-.616 0-1.12-.182-1.512-.546a1.762 1.762 0 01-.588-1.344c0-.653.294-1.153.882-1.498.588-.355 1.624-.532 3.108-.532v-.35c0-.317-.13-.593-.392-.826a1.3 1.3 0 00-.938-.364c-.69 0-1.11.303-1.26.91h-1.12c.075-.55.322-1.003.742-1.358.42-.355.966-.532 1.638-.532zm-.56 5.46c.532 0 .98-.15 1.344-.448.364-.308.546-.649.546-1.022v-.49c-1.176 0-1.96.089-2.352.266-.392.177-.588.462-.588.854 0 .224.098.42.294.588.196.168.448.252.756.252zm6.368.77l-2.45-6.16h1.12l1.89 4.83 1.89-4.83h1.12l-2.73 6.86c-.252.635-.518 1.083-.798 1.344-.27.27-.611.406-1.022.406l-.42-.07v-.84c.299 0 .528-.065.686-.196.168-.13.313-.345.434-.644l.28-.7zm10.853-6.23c.579 0 1.073.238 1.484.714.41.476.616 1.101.616 1.876V30h-1.05v-3.78c0-.504-.121-.896-.364-1.176a1.1 1.1 0 00-.896-.434c-.364 0-.677.15-.938.448-.261.299-.392.686-.392 1.162V30h-1.05v-3.78c0-.504-.121-.896-.364-1.176a1.1 1.1 0 00-.896-.434c-.355 0-.667.154-.938.462-.261.308-.392.69-.392 1.148V30h-1.05v-6.3h.77l.28.7a.625.625 0 01.056-.084c.028-.037.089-.098.182-.182a1.51 1.51 0 01.308-.238c.112-.065.257-.126.434-.182.177-.056.364-.084.56-.084.373 0 .705.093.994.28.29.187.49.373.602.56l.154.28c.019-.028.042-.065.07-.112.028-.056.098-.15.21-.28.112-.13.233-.243.364-.336a2.02 2.02 0 01.532-.266c.224-.084.462-.126.714-.126zm7.836 4.69h1.12c-.233.504-.57.924-1.008 1.26-.438.327-.966.49-1.582.49-.821 0-1.517-.303-2.086-.91-.57-.607-.854-1.377-.854-2.31 0-.924.28-1.69.84-2.296.57-.616 1.246-.924 2.03-.924.784 0 1.447.294 1.988.882.541.588.812 1.344.812 2.268l-.07.56h-4.48c.038.457.238.863.602 1.218s.77.532 1.218.532c.597 0 1.087-.257 1.47-.77zm-1.54-3.71c-.42 0-.803.173-1.148.518-.336.345-.537.78-.602 1.302h3.43c-.065-.55-.257-.99-.574-1.316-.308-.336-.676-.504-1.106-.504zm7.065-.98c.681 0 1.26.257 1.736.77s.714 1.167.714 1.96V30h-1.05v-3.64c0-.513-.15-.933-.448-1.26a1.424 1.424 0 00-1.092-.49c-.495 0-.901.163-1.218.49-.308.317-.462.737-.462 1.26V30h-1.05v-6.3h.77l.28.7c.046-.056.116-.126.21-.21.093-.084.294-.196.602-.336.317-.15.653-.224 1.008-.224zm4.828-.7v-.91h.91v1.68h1.4v.98h-1.4v3.29c0 .345.093.62.28.826.196.196.453.294.77.294l.35-.07v.91c-.14.093-.35.14-.63.14-.504 0-.933-.196-1.288-.588-.355-.392-.532-.896-.532-1.512v-3.29h-1.12v-.98h.49c.513 0 .77-.257.77-.77zm10.992 5.25c0 .541-.2.994-.602 1.358-.392.355-.914.532-1.568.532-.681 0-1.227-.182-1.638-.546-.41-.364-.634-.835-.672-1.414h1.05c.038.29.164.527.378.714.215.177.509.266.882.266.336 0 .607-.089.812-.266a.821.821 0 00.308-.644.627.627 0 00-.336-.574c-.224-.14-.5-.243-.826-.308-.317-.075-.64-.159-.966-.252a1.672 1.672 0 01-.826-.532c-.224-.27-.336-.625-.336-1.064 0-.504.196-.933.588-1.288.392-.355.896-.532 1.512-.532.654 0 1.167.173 1.54.518.383.345.593.803.63 1.372h-1.05c-.074-.607-.448-.91-1.12-.91-.298 0-.55.084-.756.252-.196.168-.294.364-.294.588 0 .252.112.448.336.588.224.13.495.233.812.308.327.065.654.145.98.238.327.093.602.275.826.546.224.261.336.611.336 1.05zm3.074 1.68l-2.45-6.16h1.12l1.89 4.83 1.89-4.83h1.12l-2.73 6.86c-.252.635-.518 1.083-.798 1.344-.271.27-.612.406-1.022.406l-.42-.07v-.84c.298 0 .527-.065.686-.196.168-.13.312-.345.434-.644l.28-.7zm8.752-1.68c0 .541-.2.994-.602 1.358-.392.355-.914.532-1.568.532-.68 0-1.227-.182-1.638-.546-.41-.364-.634-.835-.672-1.414h1.05a1.1 1.1 0 00.378.714c.215.177.51.266.882.266.336 0 .607-.089.812-.266a.822.822 0 00.308-.644.627.627 0 00-.336-.574c-.224-.14-.499-.243-.826-.308-.317-.075-.639-.159-.966-.252a1.671 1.671 0 01-.826-.532c-.224-.27-.336-.625-.336-1.064 0-.504.196-.933.588-1.288.392-.355.896-.532 1.512-.532.654 0 1.167.173 1.54.518.383.345.593.803.63 1.372h-1.05c-.074-.607-.448-.91-1.12-.91-.298 0-.55.084-.756.252-.196.168-.294.364-.294.588 0 .252.112.448.336.588.224.13.495.233.812.308.327.065.654.145.98.238.327.093.602.275.826.546.224.261.336.611.336 1.05zm2.024-5.25v-.91h.91v1.68h1.4v.98h-1.4v3.29c0 .345.093.62.28.826.196.196.453.294.77.294l.35-.07v.91c-.14.093-.35.14-.63.14-.504 0-.934-.196-1.288-.588-.355-.392-.532-.896-.532-1.512v-3.29h-1.12v-.98h.49c.513 0 .77-.257.77-.77zm7.708 5.39h1.12a3.32 3.32 0 01-1.008 1.26c-.44.327-.966.49-1.582.49-.822 0-1.517-.303-2.087-.91-.569-.607-.854-1.377-.854-2.31 0-.924.28-1.69.84-2.296.57-.616 1.246-.924 2.03-.924.785 0 1.447.294 1.989.882.54.588.811 1.344.811 2.268l-.07.56h-4.48c.038.457.239.863.603 1.218.363.355.77.532 1.218.532.597 0 1.087-.257 1.47-.77zm-1.54-3.71c-.42 0-.803.173-1.148.518-.337.345-.537.78-.603 1.302h3.43c-.065-.55-.256-.99-.574-1.316-.308-.336-.676-.504-1.106-.504zm10.424-.98c.579 0 1.073.238 1.484.714.41.476.616 1.101.616 1.876V30h-1.05v-3.78c0-.504-.121-.896-.364-1.176a1.1 1.1 0 00-.896-.434c-.364 0-.677.15-.938.448-.261.299-.392.686-.392 1.162V30h-1.05v-3.78c0-.504-.121-.896-.364-1.176a1.1 1.1 0 00-.896-.434c-.355 0-.667.154-.938.462-.261.308-.392.69-.392 1.148V30h-1.05v-6.3h.77l.28.7a.635.635 0 01.056-.084c.028-.037.089-.098.182-.182.093-.093.196-.173.308-.238.112-.065.257-.126.434-.182.177-.056.364-.084.56-.084.373 0 .705.093.994.28.29.187.49.373.602.56l.154.28c.019-.028.042-.065.07-.112.028-.056.098-.15.21-.28.112-.13.233-.243.364-.336a2.02 2.02 0 01.532-.266c.224-.084.462-.126.714-.126z" fill="#888"></path></svg>\
            </button>\
    			</li>\
                <li class="refill-window__payment" onclick="OnClickElement2(this)">\
    				<button class="refill-window__payment-btn" id="element2">\
                    <svg id="sign" xmlns="http://www.w3.org/2000/svg" width="145.5" height="36.5" viewBox="0 0 291 73"><path id="Shape_5_copy_16" data-name="Shape 5 copy 16" class="cls-1" d="M160.109,120.076a6.433,6.433,0,1,0-9.11,9.086L175.9,154l9.111-9.088Z" transform="translate(-126 -81)" fill="#f4a800" fill-rule = "evenodd"/><path id="Shape_5_copy_15" data-name="Shape 5 copy 15" class="cls-1" d="M186,105.836L161.1,81l-9.11,9.087,24.9,24.837A6.434,6.434,0,1,0,186,105.836Z" transform="translate(-126 -81)" fill="#f4a800" fill-rule="evenodd"/><path id="Shape_5_copy_6" data-name="Shape 5 copy 6" class="cls-2" d="M162.032,82.334L161.1,81l-33.209,33.046a6.434,6.434,0,0,0,9.1,9.1L161.858,98.4C167.167,93.117,164.293,85.582,162.032,82.334Z" transform="translate(-126 -81)" fill="#ffbb13" fill-rule="evenodd"/><path id="Shape_5_copy_4" data-name="Shape 5 copy 4" class="cls-2" d="M209.119,111.866a6.462,6.462,0,0,0-9.11-.011L175.144,136.6c-5.309,5.282-2.435,12.818-.173,16.064L175.9,154l33.209-33.047A6.42,6.42,0,0,0,209.119,111.866Z" transform="translate(-126 -81)" fill="#ffbb13" fill-rule="evenodd"/><path id="AnyPay" class="cls-3" d="M266.633,132h7.321L260.8,96.611h-6.762L240.924,132h7.321l2.408-7.077h13.572Zm-13.961-13.061,4.718-13.888h0.049l4.743,13.888h-9.51Zm40.034-11.675a10.139,10.139,0,0,0-7.807,3.551h-0.073v-3.137h-6.519V132h6.519V119.766c0-4.329,2.213-6.64,5.521-6.64,3.016,0,4.67,1.435,4.67,6.081v12.818h6.518V117.577c0-7.491-3.624-10.313-8.829-10.313h0Zm29.533,0.413-5.57,15.056H316.6l-5.958-15.056h-6.811l9.729,22.815-4.329,11.358h6.664L329,107.677h-6.762ZM333.891,132H340.8V119.888h5.521c7.783,0,12.964-3.722,12.964-11.481,0-6.786-3.721-11.8-12.307-11.8H333.891V132Zm6.908-18.314V102.838h4.937c4.086,0,6.3,2.14,6.3,5.423,0,3.26-2.189,5.424-6.592,5.424H340.8Zm40.851-6.009v2.749h-0.1a9.174,9.174,0,0,0-7.175-3.162c-6.518,0-11.456,5.253-11.456,12.647,0,7.516,4.913,12.5,11.651,12.5a8.769,8.769,0,0,0,7.272-3.357h0.122V132h6.2V107.677H381.65Zm-5.886,18.9c-3.649,0-6.227-2.7-6.227-6.64,0-4.159,2.749-6.811,6.251-6.811,3.527,0,6.13,2.919,6.13,6.811,0,3.989-2.774,6.64-6.154,6.64h0Zm34.475-18.9-5.57,15.056H404.6l-5.958-15.056h-6.811l9.729,22.815-4.329,11.358h6.664L417,107.677h-6.762Z" transform="translate(-126 -81)" fill-rule="evenodd" fill="#fff"/></svg>\
            </button>\
    			</li>\
                <li class="refill-window__payment" onclick="OnClickElement3(this)">\
    				<button class="refill-window__payment-btn" id="element3">\
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 338 98" style="enable-background:new 0 0 338 98;" xml:space="preserve"><g id="Слой_2"><g><path class="st0" d="M159.1,55.8h-35.3c0.5,3.1,1.9,5.6,4.1,7.4c2.2,1.8,5,2.8,8.5,2.8c4.1,0,7.6-1.4,10.6-4.3l9.2,4.3c-2.3,3.3-5.1,5.7-8.3,7.3c-3.2,1.6-7,2.4-11.5,2.4c-6.9,0-12.4-2.2-16.8-6.5c-4.3-4.3-6.5-9.7-6.5-16.3c0-6.7,2.2-12.2,6.5-16.6c4.3-4.4,9.7-6.6,16.2-6.6c6.9,0,12.5,2.2,16.8,6.6c4.3,4.4,6.5,10.2,6.5,17.5L159.1,55.8z M148.2,47.2c-0.7-2.4-2.2-4.4-4.3-5.9c-2.1-1.5-4.6-2.3-7.4-2.3c-3.1,0-5.7,0.9-8.1,2.6c-1.4,1.1-2.8,3-4,5.7H148.2z" fill= "#FFFFFF"/><path class="st0" d="M168,30.8h11v4.5c2.5-2.1,4.7-3.6,6.8-4.4c2-0.8,4.1-1.2,6.2-1.2c4.3,0,8,1.5,11,4.5c2.5,2.6,3.8,6.4,3.8,11.4v28.9H196V55.4c0-5.2-0.2-8.7-0.7-10.4c-0.5-1.7-1.3-3-2.4-3.9c-1.2-0.9-2.6-1.3-4.3-1.3c-2.2,0-4.1,0.7-5.7,2.2c-1.6,1.5-2.7,3.5-3.3,6.2c-0.3,1.4-0.5,4.3-0.5,8.9v17.5h-11V30.8z" fill= "#FFFFFF"/><path class="st0" d="M238,29.7c4.1,0,8,1,11.6,3.1c3.6,2.1,6.5,4.9,8.5,8.4c2,3.5,3.1,7.4,3.1,11.5c0,4.1-1,8-3.1,11.6c-2,3.6-4.8,6.4-8.4,8.4s-7.4,3-11.7,3c-6.3,0-11.6-2.2-16.1-6.7c-4.4-4.5-6.7-9.9-6.7-16.3c0-6.8,2.5-12.5,7.5-17.1C227.2,31.6,232.3,29.7,238,29.7z M238.1,40c-3.4,0-6.2,1.2-8.5,3.6c-2.3,2.4-3.4,5.4-3.4,9.1c0,3.8,1.1,6.9,3.4,9.2c2.2,2.4,5.1,3.5,8.5,3.5s6.3-1.2,8.6-3.6c2.3-2.4,3.4-5.5,3.4-9.2c0-3.8-1.1-6.8-3.4-9.1C244.5,41.2,241.6,40,238.1,40z" fill= "#FFFFFF"/><path class="st0" d="M271.4,14.7h11v16.1h6.5v9.4h-6.5v34.3h-11V40.2h-5.6v-9.4h5.6V14.7z" fill= "#FFFFFF"/><path class="st1" d="M300.8,63.1c1.7,0,3.2,0.6,4.5,1.8c1.2,1.2,1.8,2.7,1.8,4.4s-0.6,3.2-1.8,4.5s-2.7,1.8-4.5,1.8c-1.7,0-3.2-0.6-4.5-1.8c-1.2-1.2-1.8-2.7-1.8-4.5s0.6-3.2,1.8-4.4C297.6,63.7,299,63.1,300.8,63.1z" fill= "#FBCD02"/></g></g><g><g id="Слой_3"><g><polygon class="st1" points="37.1,90 37.1,63.7 12.9,63.7 45.3,8.2 45.3,34.6 69,34.6 			" fill= "#FBCD02"/></g></g></g></svg>\
            </button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement4(this)">\
						<button class="refill-window__payment-btn" id="element4">\
							<img class="refill-window__payment-icon" src="https://s3.timeweb.com/a3d1c97f-maps/Assets/telegram.svg">\
						</button>\
					</li>\
    			</ul>\
    			</div>\
    		<div class="refill-window__bonus"><span class="refill-window__bonus-text" id="bonus-text"></span></div>\
    		<div class="refill-window__content__pay">\
    			<div class="refill-window__payment-info">\
    				<div class="refill-window__amount-wrapper" id="amount-wrapper">\
							<div class="refill-window__amount-input-wrapper">\
								<div class="refill-window__pre-input">₽</div>\
									<input class="refill-window__amount-input" placeholder="${refilAmountInput}" type="number" id="refill-window__amount-input" value="3я00">\
								</div>\
							</div>\
						<div class="refill-window__button-wrapper" id="buybtnwrap" onclick="OnClickBuyBtn(this)">\
							<a class="refill-window__button--disabled" id="buybtn" target="_blank">${refilButton}</a>\
					</div>\
    			</div>\
    		</div>\
    	</div></div>'
};

let btn_unlocked = 0;

function ResetBtns() {
    let btn1 = document.getElementById('element1');
    let btn2 = document.getElementById('element2');
    let btn3 = document.getElementById('element3');
    let btn4 = document.getElementById('element4');

    btn1.style.backgroundColor = "#1d1d26";
    btn2.style.backgroundColor = "#1d1d26";
    btn3.style.backgroundColor = "#1d1d26";
    btn4.style.backgroundColor = "#1d1d26";
}


function UnLockBuyBtn() {
    let btn_buy = document.getElementById('buybtn');
    btn_buy.classList.remove('refill-window__button--disabled');
    btn_buy.classList.add('refill-window__button--enable');
}

function OnClickBuyBtn(event)
{
  if (btn_unlocked == 1) {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    }
    else {
        document.getElementById('bonus-text').innerText = "";
        window.open(generateUrlFreekassa());
    }
}
if (btn_unlocked == 2) {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    }
    else {
        document.getElementById('bonus-text').innerText = "";
        window.open(generateUrlAnypay());
    }
}
if (btn_unlocked == 3) {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    }
    else {
        document.getElementById('bonus-text').innerText = "";
        window.open(generateUrlEnot());
    }
}
if (btn_unlocked == 4) {
        window.open("https://t.me/sSupport212");
    }
}
var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

function generateUrlFreekassa()
{
  var inputval = document.getElementById('refill-window__amount-input').value;
  var inputfloat = parseFloat(inputval);
  return 'https://pay.summerrust.ru/freekassa_createinvoce/'+inputfloat+'/'+CustomerSteamId;
}

function generateUrlAnypay()
{
  var inputval = document.getElementById('refill-window__amount-input').value;
  var inputfloat = parseFloat(inputval);
  return 'https://pay.summerrust.ru/anypay_createinvoce/'+inputfloat+'/'+CustomerSteamId;
}

function generateUrlEnot()
{
  var inputval = document.getElementById('refill-window__amount-input').value;
  var inputfloat = parseFloat(inputval);
  return 'https://pay.summerrust.ru/enot_createinvoce/'+inputfloat+'/'+CustomerSteamId;
}

var colorgrayhover = "#272730";

function OnClickElement1(event) {
    ResetBtns();

    let element = document.getElementById('element1');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 1;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
    document.getElementById("amount-wrapper").style.display = "block";
    document.getElementById('buybtn').innerText = refilButton;
}

function OnClickElement2(event) {
    ResetBtns();

    let element = document.getElementById('element2');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 2;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
    document.getElementById("amount-wrapper").style.display = "block";
    document.getElementById('buybtn').innerText = refilButton;
}

function OnClickElement3(event) {
    ResetBtns();

    let element = document.getElementById('element3');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 3;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
    document.getElementById("amount-wrapper").style.display = "block";
    document.getElementById('buybtn').innerText = refilButton;
}

function OnClickElement4(event) {
    ResetBtns();

    let element = document.getElementById('element4');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 4;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
    document.getElementById("amount-wrapper").style.display = "none";
    document.getElementById('buybtn').innerText = contactButton;
}

function OpenPay(el, usefade = true, zind = false) {
    closepagePay();
    var div1 = document.createElement("div");
    div1.id = 'ModalPay';
    var div2 = document.createElement("div");
    div2.className = 'modalpay modalpay-service fade';
    if(!usefade) div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modalpay-dialog modalpay-lg";
    var div4 = document.createElement("div");
    div4.className = "modalpay-content";
    var div6 = document.createElement("div");
    div6.className = "modalpay-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    div8.className = "modalpay-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if(el=="Oplata") {div2.style = 'display: flex; place-content: center; align-items: center; z-index: 1051;';}

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div6);
    div1.appendChild(div8);
    if(usefade) setTimeout(()=> div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepagePay() {
    var Modal = document.getElementById('ModalPay');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null) return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
    btn_unlocked = 0;
}

function Open(el, usefade = true, zind = false)
{
    closepage();
    var div1 = document.createElement("div");
    div1.id = 'Modal';
    var div2 = document.createElement("div");
    div2.className = 'modal modal-service fade';
    if(!usefade) div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modal-dialog modal-lg";
    if(el=="block")div3.className+=" modal-lg-block"
    if(el=="block") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}
    var div4 = document.createElement("div");
    div4.className = "modal-content";
    var div5 = document.createElement("div");
    div5.className = "modal-header";
    div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
    var div6 = document.createElement("div");
    div6.className = "modal-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    div7.className = "modal-footer";
    div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
    var div8 = document.createElement("div");
    div8.className = "modal-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if(el=="Oplata") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);
    div1.appendChild(div8);
    if(usefade) setTimeout(()=> div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepage() {
    var Modal = document.getElementById('Modal');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null) return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
}

function search(e){
    if (e.offsetX < 1) {
        console.log(e.target.innerText + ' | ' + e.clientX);
        if (document.selection) { // IE
            var range = document.body.createTextRange();
            range.moveToElementText(e.target);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(e.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.');
        } catch (err) {
            console.log('Oops, unable to copy' + err);
        }
    }
}

window.onload = function ()
{
    document.body.onclick=function(event)
    {
        if(event.target.id == 'closer')closepage();
        if(event.target.id == 'closer')closepagePay();
        if(event.target.className == 'refill-window__close')closepagePay();
        if(event.target.className == 'MsoCommand')search(event);
    }
}

var CustomerSteamId = "0"; // Стандартно 0, для теста указан id
var OvhPayUrl = "";

const appCentForm = document.getElementById('appcent-inp-form');

function appcentHandler() {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);

    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    } else {
        document.getElementById('bonus-text').innerText = "";
    }

    if (CustomerSteamId == "0" || CustomerSteamId == "") {
        //document.getElementById('appcent-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";

        //return false;
    }

    fetch('https://cent.app/api/v1/bill/create', {
        method: 'POST',
        headers: {
            //'Authorization': 'Bearer 13201|BLDmFNXQQOKY9lmyKY96bKZI8jLiv9kXrui6qLmX',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: inputfloat,
            shop_id: 'WG76jKb7xl',
            order_id: `${CustomerSteamId}`,
            payer_pays_commission: '1',
            name: `Пополнение для ${CustomerSteamId}`,
        })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res.status)
                return Promise.reject(`Ошибка: ${res.status}`);
            };
        })
        .then((res) => {
            window.open(res.link_page_url);
        })
}


function OvhUrlOverrite() {
    var slides = document.getElementsByClassName("nav-link");
    for (var i = 0; i < slides.length; i++) {
        var elelink = slides.item(i);
        var urlelelink = elelink.getAttribute("href");
        if (urlelelink.startsWith('https://pay.moscow.ovh')) {
            OvhPayUrl = urlelelink;
            console.log(OvhPayUrl);
            elelink.setAttribute("href", "javascript:;");
            elelink.setAttribute("onclick", "OpenOplata()");
        }
    }
}

function obtainShopSteamId() {
    if (CustomerSteamId != "0" && CustomerSteamId != "") {
        return;
    }
    var xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null) {
        xmlHttp.open("GET", "/api/index.php?modules=users&action=getData", true);
        xmlHttp.send(null);
    }
    xmlHttp.onload = function (gjson) {
        var gjson = JSON.parse(xmlHttp.response);
        console.log(gjson);
        var preSteam = gjson.data.steamID;
        OvhPayUrl = "https://pay.moscow.ovh/?" + gjson.data.pay;
        if (preSteam > 76561100000000000 || !isNaN(preSteam)) {
            CustomerSteamId = preSteam.toString();
            OvhUrlOverrite();
        } else {
            console.log("error obtainShopSteamId! " + gjson);
        }
    }

}

function OpenOplata() {
    OpenPay('Oplata');
}

var DOMReady = function (a, b, c) { b = document, c = 'addEventListener'; b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a) }
window.addEventListener("load", function () {
    try {
        obtainShopSteamId();
        const xserver = document.querySelector('.xserver');
    const progressBar = xserver.querySelector('.progress .progress-bar');
    const progressBarText = xserver.querySelector('.xserver__links');

    function updateProgressBar(players, maxPlayers) {
      progressBar.style.width = `${players * 100 / maxPlayers}%`;
      progressBar.setAttribute('aria-valuenow', players);

      progressBarText.innerHTML = `${players} / ${maxPlayers}`
    }

    function fetchDataAndUpdateProgressBar() {
      fetch('https://pay.summerrust.ru/api/online')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const playersValue = data.players;
          const maxPlayers = data.maxplayers;
          updateProgressBar(playersValue, maxPlayers);
        })
        .catch(error => {
          console.error('Ошибка при выполнении запроса:', error);
        });
    }

    fetchDataAndUpdateProgressBar();

    setInterval(fetchDataAndUpdateProgressBar, 30000);
    } catch (e) {
        console.log('element not found ' + e);
    }
});
