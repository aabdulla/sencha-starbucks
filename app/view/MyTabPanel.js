/*
 * File: app/view/MyTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'panel',
                title: 'Home',
                iconCls: 'home',
                style: 'background-color: #1e1e1e',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        style: 'background-color: #4b981a;',
                        title: 'Starbugs'
                    },
                    {
                        xtype: 'panel',
                        height: 64,
                        margin: '10 50 0 50',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/my_drinks.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            },
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/favorites.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            },
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/coffees.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        height: 64,
                        margin: '10 50 0 50',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/food.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            },
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/drinks.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            },
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/settings.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        height: 64,
                        margin: '10 50 0 50',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                height: 64,
                                margin: '0 10 0 0',
                                style: 'border-radius: 0px; border: 1px solid transparent; background-image: url(images/icons/main/help.png); background-size: contain; background-repeat: no-repeat;',
                                width: 64
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Tab 2',
                iconCls: 'info'
            },
            {
                xtype: 'container',
                title: 'Stores',
                iconCls: 'maps',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top'
                    },
                    {
                        xtype: 'map',
                        flex: 1,
                        height: 378,
                        itemId: 'mymap',
                        ui: 'dark',
                        layout: {
                            type: 'fit'
                        },
                        useCurrentLocation: true
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onMymapMaprender',
                event: 'maprender',
                delegate: '#mymap'
            }
        ]
    },

    onMymapMaprender: function(map, gmap, options) {
        gmap.setZoom(15);

        setTimeout(function() {

            var myLocation = new google.maps.Marker({
                position: gmap.getCenter(),
                title: "My Location",
                map: gmap
            });

            var places = new google.maps.places.PlacesService(gmap);

            var request = {
                location: gmap.getCenter(),
                name: "starbucks",
                radius: 10000,
                types: ['cafe']
            };

            places.nearbySearch(request, function(results, status) {
                console.log(status);
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        console.log(place);
                        var marker = new google.maps.Marker({
                            position: place.geometry.location,
                            title: place.name,
                            //icon: place.icon,
                            icon: "http://maps.google.com/intl/en_us/mapfiles/ms/micons/green.png",
                            map: gmap
                        }
                        );
                    }
                }
            });

        }, 1000);


    }

});