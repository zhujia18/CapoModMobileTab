<?php

/*
 * This file is part of capomod/mobile-tab.
 *
 * Copyright (c) 2022 Jasper.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace CapoMod\MobileTab;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))->js(__DIR__.'/js/dist/forum.js')->css(__DIR__.'/less/forum.less'),

    new Extend\Locales(__DIR__.'/locale'),
];
