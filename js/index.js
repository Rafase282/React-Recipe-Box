'use strict';

var RecipeBox = React.createClass({
    displayName: 'RecipeBox',

    getInitialState: function getInitialState() {
        var PreviousData = localStorage.getItem('Rafase282_RecipesBox');
        if (PreviousData === null) {
            PreviousData = {
                recipes: [{
                    title: 'Quinoa with Asian Flavors',
                    url: 'http://images.media-allrecipes.com/userphotos/250x250/470894.jpg',
                    content: '## Ingridients\n * 1 tablespoon extra-virgin olive oil\n * 1 cup quinoa\n * 2 cups chicken broth\n * 2 tablespoons soy sauce\n * 1 tablespoon minced fresh ginger root\n * 1 clove garlic, minced\n## Directions\n Heat olive oil in a saucepan over medium heat. Stir in quinoa and allow to toast for 2 to 3 minutes, then add chicken broth, soy sauce, ginger and garlic. Increase heat and bring to a boil. Cover and reduce heat to low. Simmer until all liquid has been absorbed, 25 to 30 minutes. Fluff quinoa with fork and top with green onions before serving.'
                }, {
                    title: 'Simple Lemon Herb Chicken',
                    url: 'http://images.media-allrecipes.com/userphotos/720x405/1889670.jpg',
                    content: '## Ingridients\n * 2 skinless, boneless chicken breast halves\n * 1 lemon\n * 1 tablespoon olive oil\n * 1 pinch dried oregano\n * 2 sprigs fresh parsley, for garnish\n## Directions\n Cut lemon in half, and squeeze juice from 1/2 lemon on chicken. Season with salt to taste. Let sit while you heat oil in a small skillet over medium low heat.When oil is hot, put chicken in skillet. As you saute chicken, add juice from other 1/2 lemon, pepper to taste, and oregano. Saute for 5 to 10 minutes each side, or until juices run clear. Serve with parsley for garnish.'
                }, {
                    title: 'Greek Zoodle Salad',
                    url: 'http://images.media-allrecipes.com/userphotos/720x405/2171304.jpg',
                    content: '## Ingridients\n * 2 zucchini\n * 1/4 English cucumber, chopped\n * 10 cherry tomatoes, halved, or more to taste\n * 10 pitted kalamata olives, halved, or more to taste\n * 1/4 cup thinly sliced red onion\n * 2 ounces crumbled reduced-fat feta cheese\n * 2 tablespoons extra-virgin olive oil\n * 2 tablespoons fresh lemon juice\n * 1 teaspoon dried oregano\n * salt and ground black pepper to taste\n## Directions\n Cut zucchini into noodle-shaped strands using a spiralizing tool. Place "zoodles" in a large bowl and top with cucumber, tomatoes, olives, red onion, and feta cheese. Whisk olive oil, lemon juice, oregano, salt, and pepper together in a bowl until dressing is smooth; pour over "zoodle" mixture and toss to coat. Marinate salad in refrigerator for 10 to 15 minutes.'
                }]
            };
            return PreviousData;
        }
        return JSON.parse(PreviousData);
    },
    addRecipe: function addRecipe(newRecipe) {
        var newState = Object.assign({}, this.state);
        newState.recipes = newState.recipes.concat(newRecipe);
        localStorage.setItem('Rafase282_RecipesBox', JSON.stringify(newState));
        this.setState(newState);
    },
    delRecipe: function delRecipe(index) {
        var newState = Object.assign({}, this.state);
        newState.recipes.splice(index, 1);
        localStorage.setItem('Rafase282_RecipesBox', JSON.stringify(newState));
        this.setState(newState);
    },
    render: function render() {
        return React.createElement(
            'section', {
                className: 'container-fluid'
            },
            React.createElement(Header, null),
            React.createElement(
                'main', {
                    className: 'page-content'
                },
                React.createElement(RecipeList, {
                    recipes: this.state.recipes,
                    onDelete: this.delRecipe
                }),
                React.createElement(RecipeForm, {
                    onUpdate: this.addRecipe
                })
            ),
            React.createElement(Footer, null)
        );
    }
});

var Header = React.createClass({
    displayName: 'Header',

    render: function render() {
        return React.createElement(
            'header', {
                className: 'page-header center-align'
            },
            React.createElement(
                'nav',
                null,
                React.createElement(
                    'div', {
                        className: 'nav-wrapper light-blue darken-4'
                    },
                    React.createElement(
                        'a', {
                            className: 'brand-logo center'
                        },
                        'Recipe Box'
                    )
                )
            )
        );
    }
});

var Footer = React.createClass({
    displayName: 'Footer',

    render: function render() {
        return React.createElement(
            'footer', {
                className: 'page-footer center-align light-blue darken-4'
            },
            React.createElement(FooterInfo, null),
            React.createElement(FooterCopyright, null)
        );
    }
});

var FooterCopyright = React.createClass({
    displayName: 'FooterCopyright',

    render: function render() {
        return React.createElement(
            'div', {
                className: 'footer-copyright'
            },
            React.createElement(
                'div', {
                    className: 'container center-align'
                },
                'Copyright ©  ',
                React.createElement(
                    'a', {
                        className: 'grey-text text-lighten-4',
                        href: 'http://rafase282.github.io/'
                    },
                    'Rafael J. Rodriguez'
                ),
                '  2016. All Rights Reserved'
            )
        );
    }
});

var FooterInfo = React.createClass({
    displayName: 'FooterInfo',

    render: function render() {
        return React.createElement(
            'div', {
                className: 'container'
            },
            React.createElement(
                'div', {
                    className: 'row'
                },
                React.createElement(
                    'div', {
                        className: 'col l6 s12'
                    },
                    React.createElement(
                        'h5', {
                            className: 'white-text'
                        },
                        'About the Site'
                    ),
                    React.createElement(
                        'p', {
                            className: 'grey-text text-lighten-4'
                        },
                        'This project is part of the React curriculum at ',
                        React.createElement(
                            'a', {
                                className: 'grey-text',
                                href: 'http://freecodecamp.com',
                                taget: '_blank'
                            },
                            'FreeCodeCamp'
                        ),
                        ', created and designed by ',
                        React.createElement(
                            'a', {
                                className: 'grey-text',
                                href: 'https://gitter.im/Rafase282',
                                taget: '_blank'
                            },
                            'Rafase282'
                        ),
                        ' using ',
                        React.createElement(
                            'a', {
                                className: 'grey-text',
                                href: 'http://materializecss.com/',
                                taget: '_blank'
                            },
                            'Materialize'
                        ),
                        '. Also useful for taking notes.'
                    )
                ),
                React.createElement(
                    'div', {
                        className: 'col l4 offset-l2 s12'
                    },
                    React.createElement(
                        'h5', {
                            className: 'white-text'
                        },
                        'Contact Me'
                    ),
                    React.createElement(
                        'div', {
                            className: 'col s6'
                        },
                        React.createElement(
                            'ul', {
                                className: 'white-text'
                            },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'mailto:rafase282@gmail.com'
                                    },
                                    React.createElement('i', {
                                        className: 'fa fa-envelope fa-fw'
                                    })
                                ),
                                '  E-Mail'
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'https://github.com/Rafase282',
                                        target: '_blank'
                                    },
                                    React.createElement('i', {
                                        className: 'fa fa-github fa-fw'
                                    })
                                ),
                                '  Github'
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'https://www.linkedin.com/in/rafase282',
                                        target: '_blank'
                                    },
                                    React.createElement('i', {
                                        className: 'fa fa-linkedin'
                                    })
                                ),
                                '  LinkedIn'
                            )
                        )
                    ),
                    React.createElement(
                        'div', {
                            className: 'col s6'
                        },
                        React.createElement(
                            'ul', {
                                className: 'white-text'
                            },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'http://codepen.io/Rafase282',
                                        target: '_blank'
                                    },
                                    React.createElement('i', {
                                        className: 'fa fa-codepen'
                                    })
                                ),
                                '  Codepen'
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'https://rafase282.wordpress.com/',
                                        target: '_blank'
                                    },
                                    React.createElement('i', {
                                        className: 'fa fa-wordpress'
                                    })
                                ),
                                '  Wordpress'
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a', {
                                        href: 'http://www.freecodecamp.com/rafase282',
                                        target: '_blank'
                                    },
                                    '(',
                                    React.createElement('i', {
                                        className: 'fa fa-fire fa-fw'
                                    }),
                                    ')'
                                ),
                                '  FreeCodeCamp'
                            )
                        )
                    )
                )
            )
        );
    }
});

var RecipeForm = React.createClass({
    displayName: 'RecipeForm',

    getInitialState: function getInitialState() {
        return {
            title: '',
            url: '',
            content: ''
        };
    },
    onChange: function onChange(e) {
        var _setState;

        this.setState((_setState = {}, _setState[e.target.id] = e.target.value, _setState));
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        this.props.onUpdate(this.state);
        $('#modal1').closeModal();
        this.setState({
            title: '',
            url: '',
            content: ''
        });
    },
    render: function render() {
        return React.createElement(
            'aside', {
                className: 'center-align'
            },
            React.createElement(
                'a', {
                    className: 'btn-floating btn-large waves-effect waves-light red modal-trigger',
                    href: '#modal1'
                },
                React.createElement(
                    'i', {
                        className: 'material-icons'
                    },
                    'add'
                )
            ),
            React.createElement(
                'div', {
                    id: 'modal1',
                    className: 'modal modal-fixed-footer'
                },
                React.createElement(
                    'div', {
                        className: 'modal-content'
                    },
                    React.createElement(
                        'h4',
                        null,
                        'Add Recipe'
                    ),
                    React.createElement(
                        'div', {
                            className: 'row'
                        },
                        React.createElement(
                            'form', {
                                className: 'col s12',
                                onSubmit: this.handleSubmit
                            },
                            React.createElement(
                                'div', {
                                    className: 'row'
                                },
                                React.createElement(
                                    'div', {
                                        className: 'input-field col s6'
                                    },
                                    React.createElement(
                                        'i', {
                                            className: 'material-icons prefix'
                                        },
                                        'label_outline'
                                    ),
                                    React.createElement('input', {
                                        id: 'title',
                                        type: 'text',
                                        className: 'validate',
                                        onChange: this.onChange,
                                        value: this.state.title
                                    }),
                                    React.createElement(
                                        'label', {
                                            htmlFor: 'title'
                                        },
                                        'Recipe Title'
                                    )
                                ),
                                React.createElement(
                                    'div', {
                                        className: 'input-field col s6'
                                    },
                                    React.createElement(
                                        'i', {
                                            className: 'material-icons prefix'
                                        },
                                        'perm_media'
                                    ),
                                    React.createElement('input', {
                                        id: 'url',
                                        type: 'text',
                                        className: 'validate',
                                        onChange: this.onChange,
                                        value: this.state.url
                                    }),
                                    React.createElement(
                                        'label', {
                                            htmlFor: 'url'
                                        },
                                        'Recipe Image'
                                    )
                                )
                            ),
                            React.createElement(
                                'div', {
                                    className: 'row'
                                },
                                React.createElement(
                                    'div', {
                                        className: 'input-field col s12'
                                    },
                                    React.createElement(
                                        'i', {
                                            className: 'material-icons prefix'
                                        },
                                        'mode_edit'
                                    ),
                                    React.createElement('textarea', {
                                        id: 'content',
                                        className: 'validate materialize-textarea',
                                        onChange: this.onChange,
                                        value: this.state.content
                                    }),
                                    React.createElement(
                                        'label', {
                                            htmlFor: 'content'
                                        },
                                        'Recipe'
                                    )
                                )
                            ),
                            React.createElement(
                                'button', {
                                    className: 'btn waves-effect waves-light cyan lighten-1',
                                    type: 'submit',
                                    name: 'action'
                                },
                                'Create',
                                React.createElement(
                                    'i', {
                                        className: 'material-icons right'
                                    },
                                    'send'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div', {
                        className: 'modal-footer'
                    },
                    React.createElement(
                        'a', {
                            className: 'modal-action modal-close waves-effect waves-green btn btn-flat'
                        },
                        'Close'
                    )
                )
            )
        );
    }
});

var RecipeList = React.createClass({
    displayName: 'RecipeList',

    render: function render() {
        var del = this.props.onDelete;
        var recipes = this.props.recipes.map(function(recipeData, index) {
            return React.createElement(Recipe, {
                key: index,
                id: index,
                recipe: recipeData,
                onDelete: del
            });
        });

        return React.createElement(
            'aside', {
                className: 'recipleList'
            },
            React.createElement(
                'h1', {
                    className: 'center'
                },
                'Recipes'
            ),
            React.createElement(
                'div', {
                    className: 'row'
                },
                recipes
            )
        );
    }
});

var Recipe = React.createClass({
    displayName: 'Recipe',

    handleDelete: function handleDelete() {
        this.props.onDelete(this.props.id);
    },
    rawMarkup: function rawMarkup() {
        var rawMarkup = marked(this.props.recipe.content, {
            sanitize: true
        });
        return {
            __html: rawMarkup
        };
    },
    render: function render() {
        return React.createElement(
            'div', {
                className: ' col s12 m6 l4'
            },
            React.createElement(
                'div', {
                    className: 'card small'
                },
                React.createElement(
                    'div', {
                        className: 'card-image waves-effect waves-block waves-light'
                    },
                    React.createElement('img', {
                        className: 'activator',
                        src: this.props.recipe.url
                    })
                ),
                React.createElement(
                    'div', {
                        className: 'card-content'
                    },
                    React.createElement(
                        'span', {
                            className: 'card-title activator grey-text text-darken-4'
                        },
                        this.props.recipe.title,
                        React.createElement(
                            'i', {
                                className: 'material-icons right'
                            },
                            'more_vert'
                        )
                    ),
                    React.createElement(
                        'p', {
                            className: 'center-align'
                        },
                        React.createElement(
                            'a', {
                                className: 'waves-effect waves-light btn blue'
                            },
                            'Edit'
                        ),
                        ' ',
                        React.createElement(
                            'a', {
                                className: 'waves-effect waves-light btn red',
                                onClick: this.handleDelete
                            },
                            'Delete'
                        )
                    )
                ),
                React.createElement(
                    'div', {
                        className: 'card-reveal'
                    },
                    React.createElement(
                        'span', {
                            className: 'card-title grey-text text-darken-4'
                        },
                        this.props.recipe.title,
                        React.createElement(
                            'i', {
                                className: 'material-icons right'
                            },
                            'close'
                        )
                    ),
                    React.createElement('div', {
                        className: 'parsed flow-text',
                        dangerouslySetInnerHTML: this.rawMarkup()
                    })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById('content'));

$(document).ready(function() {

    $('.modal-trigger').leanModal();
});
