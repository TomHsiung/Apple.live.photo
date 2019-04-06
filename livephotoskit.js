/*!
 * Copyright (c) 2017 Apple Inc. All rights reserved.
 *
 * # LivePhotosKit JS License
 *
 * **IMPORTANT:** This Apple LivePhotosKit software is supplied to you by Apple
 * Inc. ("Apple") in consideration of your agreement to the following terms, and
 * your use, reproduction, or installation of this Apple software constitutes
 * acceptance of these terms. If you do not agree with these terms, please do not
 * use, reproduce or install this Apple software.
 *
 * This Apple LivePhotosKit software is supplied to you by Apple Inc. ("Apple") in
 * consideration of your agreement to the following terms, and your use,
 * reproduction, or installation of this Apple software constitutes acceptance of
 * these terms. If you do not agree with these terms, please do not use, reproduce
 * or install this Apple software.
 *
 * This software is licensed to you only for use with LivePhotos that you are
 * authorized or legally permitted to embed or display on your website.
 *
 * The LivePhotosKit Software is only licensed and intended for the purposes set
 * forth above and may not be used for other purposes or in other contexts without
 * Apple's prior written permission. For the sake of clarity, you may not and
 * agree not to or enable others to, modify or create derivative works of the
 * LivePhotosKit Software.
 *
 * Neither the name, trademarks, service marks or logos of Apple Inc. may be used
 * to endorse or promote products, services without specific prior written
 * permission from Apple. Except as expressly stated in this notice, no other
 * rights or licenses, express or implied, are granted by Apple herein.
 *
 * The LivePhotosKit Software is provided by Apple on an "AS IS" basis. APPLE
 * MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE
 * IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE, REGARDING THE LIVEPHOTOSKIT SOFTWARE OR ITS USE AND
 * OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS, SYSTEMS, OR SERVICES.
 * APPLE DOES NOT WARRANT THAT THE LIVEPHOTOSKIT SOFTWARE WILL MEET YOUR
 * REQUIREMENTS, THAT THE OPERATION OF THE LIVEPHOTOSKIT SOFTWARE WILL BE
 * UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE LIVEPHOTOSKIT SOFTWARE WILL BE
 * CORRECTED, OR THAT THE LIVEPHOTOSKIT SOFTWARE WILL BE COMPATIBLE WITH FUTURE
 * APPLE PRODUCTS, SOFTWARE OR SERVICES. NO ORAL OR WRITTEN INFORMATION OR ADVICE
 * GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY.
 *
 * IN NO EVENT SHALL APPLE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) RELATING TO OR ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
 * OR INSTALLATION, OF THE LIVEPHOTOSKIT SOFTWARE BY YOU OR OTHERS, HOWEVER CAUSED
 * AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT
 * LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR
 * PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION
 * MAY NOT APPLY TO YOU. In no event shall Apple's total liability to you for all
 * damages (other than as may be required by applicable law in cases involving
 * personal injury) exceed the amount of fifty dollars ($50.00). The foregoing
 * limitations will apply even if the above stated remedy fails of its essential
 * purpose.
 *
 *
 * **ACKNOWLEDGEMENTS:**
 * https://cdn.apple-livephotoskit.com/lpk/1/acknowledgements.txt
 *
 * v1.5.4
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.LivePhotosKit = t() : e.LivePhotosKit = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (r[i])
                return r[i].exports;
            var n = r[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.i = function(e) {
            return e
        }, t.d = function(e, r, i) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 68)
    }([function(e, t, r) {
        "use strict";
        function i(e) {
            if (e) {
                var t = e.staticMembers;
                t && n.call(this, t), n.call(this.prototype, e)
            }
        }
        function n(e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && "staticMembers" !== t) {
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    r.get || r.set ? Object.defineProperty(this, t, r) : a.call(this, t, e[t])
                }
        }
        function a(e, t) {
            var r = this[e];
            return r instanceof Function && t instanceof Function ? o.call(this, e, t, r) : L.instanceOrKindOf(t, L.Metadata) ? s.call(this, e, t) : void (this[e] = t)
        }
        function o(e, t, r) {
            this[e] = function() {
                var e = this._super;
                this._super = r;
                var i = t.apply(this, arguments);
                return this._super = e, i
            }
        }
        function s(e, t) {
            this.hasOwnProperty("_metadatas") || (this._metadatas = Object.create(this._metadatas)), (t.isLPKClass ? t.sharedInstance : t).registerOnDefinition(this, e)
        }
        function d(e) {
            var t = this["_callbacksFor_" + e];
            if (t) {
                var r = void 0;
                if (arguments.length > 1) {
                    r = L.arrayPool.get();
                    for (var i = 1, n = arguments.length; i < n; i++)
                        r[i - 1] = arguments[i]
                }
                var a = void 0;
                if (a = this._triggerPauseStack) {
                    var o = a[a.length - 1];
                    if ("IS_FLUSHING" !== o[o.length - 1])
                        return void o.push(this, e, r)
                }
                for (var s = 0, d = t.length; s < d; s++) {
                    var l = t[s];
                    l && l.apply(this, r)
                }
                r && L.arrayPool.ret(r)
            }
        }
        function l(e, t) {
            if (-1 !== e.indexOf("."))
                return u.call(this, e, t);
            var r = "_callbackToIndexMapFor_" + e,
                i = this.hasOwnProperty(r) ? this[r] : this[r] = this[r] ? new E.a(this[r]) : new E.a;
            if (void 0 === i.get(t)) {
                var n = "_callbacksFor_" + e,
                    a = this.hasOwnProperty(n) ? this[n] : this[n] = this[n] ? this[n].slice() : [];
                i.set(t, a.length), a.push(t)
            }
        }
        function c(e, t) {
            if (-1 !== e.indexOf("."))
                return h.call(this, e, t);
            var r = "_callbackToIndexMapFor_" + e,
                i = this[r];
            if (i && void 0 !== i.get(t)) {
                var n = this.hasOwnProperty(r) ? this[r] : this[r] = this[r] ? new E.a(this[r]) : new E.a,
                    a = "_callbacksFor_" + e;
                (this.hasOwnProperty(a) ? this[a] : this[a] = this[a] ? this[a].slice() : [])[n.get(t)] = null, n.delete(t)
            }
        }
        function u(e, t, r) {
            var i = "_" + e + "_" + L.guidFor(t) + "_" + L.guidFor(r),
                n = "_chainListenerMaintenanceCallback_for" + i;
            if (!this[n]) {
                var a = e.indexOf("."),
                    o = -1 !== a,
                    s = e.substring(a + 1),
                    d = s.substring(0, (s.indexOf(".") + 1 || s.length + 1) - 1),
                    c = e.substring(0, -1 === a ? e.length : a),
                    p = "_chainListenerPreviousStoredValue_for" + i,
                    f = function(e) {
                        var i = r || this;
                        if (d && o) {
                            var n = this[c],
                                a = this[p];
                            n !== a && (this[p] = n, a && a.isLPKObservable && h.call(a, s, t, i), n && n.isLPKObservable && u.call(n, s, t, i))
                        }
                        e || t.call(i)
                    };
                l.call(this, c, f), this.isInitialized && f.call(this, !0), this[n] = f
            }
        }
        function h(e, t, r) {
            var i = "_" + e + "_" + L.guidFor(t) + "_" + L.guidFor(r),
                n = "_chainListenerMaintenanceCallback_for" + i,
                a = this[n];
            if (a) {
                var o = e.indexOf("."),
                    s = e.substring(0, -1 === o ? e.length : o);
                c.call(this, s, a);
                var d = "_chainListenerPreviousStoredValue_for" + i,
                    l = this[d];
                if (l && l.isLPKObservable) {
                    this[d] = void 0;
                    var u = e.substring(o + 1),
                        p = r || this;
                    h.call(l, u, t, p)
                }
                this[n] = void 0
            }
        }
        function p(e, t) {
            l.apply(this, arguments), this.isInitialized && t.call(this)
        }
        function f(e, t) {
            c.apply(this, arguments)
        }
        function v() {
            var e = this._nextObserverId = (this._nextObserverId || 0) + 1,
                t = "_runtimeObserver" + e,
                r = L.observer.apply(L.observer, arguments);
            return r.registerOnDefinition(this, t), r
        }
        function y(e) {
            var t = this._metadatas[e];
            t && t.invalidateForObject && t.invalidateForObject(this)
        }
        function g(e) {
            return L.resolvePropertyPathFromObject(this, e)
        }
        function m(e, t) {
            var r = e.lastIndexOf(".");
            if (-1 === r)
                return void (this[e] = t);
            var i = L.resolvePropertyPathFromObject(this, e.slice(0, r));
            i && (i[e.slice(r + 1)] = t)
        }
        function b() {
            for (var e = L.objectPool.get(), t = 0, r = arguments.length; t < r; t++) {
                var i = arguments[t];
                e[i] = this.getPath(i)
            }
            return e
        }
        function _() {
            var e = arguments.length,
                t = arguments[e - 1],
                r = L.arrayPool.get();
            if (e > 1)
                for (var i = 0; i < e - 1; i++)
                    r[i] = arguments[i];
            else
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && r.push(n);
            L.Object.prototype.pauseNotifications();
            for (var a = 0, o = r.length; a < o; a++) {
                var s = r[a];
                this.setPath(s, t[s])
            }
            L.Object.prototype.resumeNotifications(), L.arrayPool.ret(r)
        }
        function P() {
            (this.hasOwnProperty("_triggerPauseStack") ? this._triggerPauseStack : this._triggerPauseStack = L.arrayPool.get()).push(L.arrayPool.get())
        }
        function T() {
            var e = this.hasOwnProperty("_triggerPauseStack") && this._triggerPauseStack;
            if (!e)
                throw "Unmatched `resumeNotifications` call. Cannot over-resume notifications.";
            var t = e[e.length - 1];
            x(t), e.pop(), L.arrayPool.ret(t), e.length || (delete this._triggerPauseStack, L.arrayPool.ret(e))
        }
        function x(e) {
            e.push("IS_FLUSHING");
            for (var t = L.objectPool.get(), r = 0, i = e.length - 1; r < i; r += 3) {
                var n = e[r],
                    a = e[r + 1],
                    o = e[r + 2],
                    s = L.guidFor(n) + ":" + a,
                    d = t[s];
                void 0 !== d && (e[d] = null), t[s] = o ? void 0 : r
            }
            L.objectPool.ret(t);
            for (var l = 0, c = e.length - 1; l < c; l += 3) {
                var u = e[l];
                if (u) {
                    var h = e[l + 1],
                        p = e[l + 2];
                    p ? (p.unshift(h), u.trigger.apply(u, p), L.arrayPool.ret(p)) : u.trigger(h)
                }
            }
        }
        var k = r(90),
            S = r(20),
            E = r(19),
            O = r(87),
            w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            L = {
                mixin: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        r[i - 1] = arguments[i];
                    for (var n = 1, a = arguments.length; n < a; n++) {
                        var o = arguments[n];
                        if (o)
                            for (var s in o)
                                o.hasOwnProperty(s) && (e[s] = o[s])
                    }
                },
                instanceOf: function(e, t) {
                    return !!e && (e.constructor === t || L.kindOf(e.constructor, t))
                },
                kindOf: function(e, t) {
                    if (!(e && e.isLPKClass && t && t.isLPKClass))
                        return !1;
                    do {
                        if (e === t)
                            return !0
                    } while (e = e.superclass);
                    return !1
                },
                instanceOrKindOf: function(e, t) {
                    return L.instanceOf(e, t) || L.kindOf(e, t)
                },
                isHash: function(e) {
                    var t = void 0;
                    return !("object" !== (void 0 === e ? "undefined" : w(e)) || null === e || (t = e.constructor) && t !== Object || e.isLPKObject || e.isLPKClass)
                },
                arrayPool: k.a,
                mapPool: k.b,
                objectPool: k.c,
                canvasPool: k.d,
                String: O.a,
                Array: {
                    mapIntoArray: function(e, t, r) {
                        var i = e.length;
                        r.length !== i && (r.length = i);
                        for (var n = 0; n < i; n++)
                            r[n] = t(e[n], n);
                        return r
                    }
                },
                resolvePropertyPathFromObject: function(e, t) {
                    for (var r = t.indexOf("."), i = 0, n = e; -1 !== r;) {
                        if (!(n = n[t.substring(i, r)]))
                            return;
                        i = r + 1, r = t.indexOf(".", i)
                    }
                    return n[t.substring(i)]
                },
                InequalityTests: {
                    DEFAULT: function(e, t, r) {
                        return e !== t || Array.isArray(e) || L.isHash(e)
                    },
                    STRICT: function(e, t, r) {
                        return e !== t
                    },
                    NAN_AWARE: function(e, t, r) {
                        return !Object.is(e, t)
                    }
                },
                guidFor: S.a,
                reusableObject: {},
                emptyArray: [],
                Object: null,
                Metadata: null,
                observer: null,
                MetadataExtension: null,
                metadataExtension: null,
                AccumulatorMetadata: null,
                accumulator: null,
                ObserverMetadata: null,
                Property: null,
                property: null,
                ObservableProperty: null,
                observableProperty: null,
                ProxyProperty: null,
                proxyProperty: null,
                boundFunction: null
            };
        L.Object = {
            staticMembers: {
                isLPKClass: !0,
                isLPKObservable: !0,
                isInitialized: !0,
                create: function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    var i = Object.create(this.prototype);
                    return i.constructor = this, i.init.apply(i, arguments), i
                },
                extend: function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    var n = Object.create(this);
                    return n.prototype = Object.create(n.prototype), Array.prototype.forEach.call(arguments, i, n), n.superclass = this, n.init(), n
                },
                init: function() {},
                isClassFor: function(e) {
                    var t = e && e.constructor;
                    return !(!t || !this.isSuperclassOf(t))
                },
                isSuperclassOf: function(e) {
                    var t = this;
                    if (!(e && e.isLPKClass && t && t.isLPKClass))
                        return !1;
                    do {
                        if (e === t)
                            return !0
                    } while (e = e.superclass);
                    return !1
                },
                _super: null,
                _metadatas: {},
                trigger: d,
                _listen: l,
                _observe: p,
                _unlisten: c,
                _unobserve: f,
                observe: v,
                propertyChanged: y,
                pauseNotifications: P,
                resumeNotifications: T,
                getPath: g,
                setPath: m,
                getMultiple: b,
                setMultiple: _
            },
            isLPKObject: !0,
            isLPKObservable: !0,
            isInitialized: !1,
            _metadatas: {},
            init: function(e) {
                L.mixin(this, e), this._awakenPropertiesWithAccessors()
            },
            _awakenPropertiesWithAccessors: function() {
                var e = L.arrayPool.get(),
                    t = this._metadatas;
                do {
                    e.push(t)
                } while (t = Object.getPrototypeOf(t));
                for (var r, i = L.arrayPool.get(), n = L.arrayPool.get(), a = L.arrayPool.get(), o = L.mapPool.get(), s = e.length - 1; r = e[s]; s--) {
                    for (var d in r)
                        if (r.hasOwnProperty(d)) {
                            var l = r[d];
                            if (l.hasAccessors) {
                                var c = this[d];
                                if (void 0 !== c) {
                                    var u = o.get(l);
                                    void 0 !== u && (i[u] = n[u] = void 0), o.set(l, i.length), i.push(l), n.push(c)
                                }
                            }
                        }
                    a.push(i.length)
                }
                this.isInitialized = !0, L.Object.prototype.pauseNotifications();
                for (var h = 0, p = n.length; h < p; h++) {
                    var f = n[h];
                    void 0 !== f && i[h].awakenForObjectWithValue(this, f)
                }
                L.Object.prototype.resumeNotifications(), L.arrayPool.ret(e), L.arrayPool.ret(i), L.arrayPool.ret(n), L.arrayPool.ret(a), L.mapPool.ret(o)
            },
            _super: null,
            trigger: d,
            _listen: l,
            _observe: p,
            _unlisten: c,
            _unobserve: f,
            observe: v,
            propertyChanged: y,
            pauseNotifications: P,
            resumeNotifications: T,
            getPath: g,
            setPath: m,
            getMultiple: b,
            setMultiple: _
        }, L.Object.staticMembers.prototype = L.Object, L.Object = L.Object.staticMembers, delete L.Object.prototype.staticMembers, Object.defineProperty(L.Object, "sharedInstance", {
            get: function() {
                return this.hasOwnProperty("_internalValue_for_sharedInstance") || (this._internalValue_for_sharedInstance = this.create()), this._internalValue_for_sharedInstance
            },
            set: function() {
                throw "Cannot write to a read-only property."
            }
        }), L.Metadata = L.Object.extend({
            registerOnDefinition: function(e, t) {
                e._metadatas[t] = this
            },
            unregisterFromDefinition: function(e, t) {
                e._metadatas[t] = void 0
            }
        }), L.MetadataExtension = L.Metadata.extend({
            init: function(e) {
                this._super(), this._extensionParams = e
            },
            registerOnDefinition: function(e, t) {
                e._metadatas[t].constructor.extend(this._extensionParams).sharedInstance.registerOnDefinition(e, t)
            }
        }), L.metadataExtension = L.MetadataExtension.create.bind(L.MetadataExtension), L.AccumulatorMetadata = L.Metadata.extend({
            init: function(e) {
                this._super(), this.value = e
            },
            registerOnDefinition: function(e, t) {
                var r = e[t];
                e[t] = this.accumulateValues(e, r, this.value)
            },
            accumulateValues: function(e, t, r) {
                if (Array.isArray(t) && Array.isArray(r))
                    return t.concat(r);
                if (t && t.isLPKClass && L.isHash(r))
                    return t.extend(r);
                if (r instanceof Function)
                    return r.call(e, t);
                throw "Cannot use accumulators this way yet."
            }
        }), L.accumulator = L.AccumulatorMetadata.create.bind(L.AccumulatorMetadata), L.ObserverMetadata = L.Metadata.extend({
            staticMembers: {
                _collector: []
            },
            dependencies: [],
            observerCallback: function() {
                throw "Must specify `observerCallback` on observers."
            },
            decideRequiresUpdate: L.InequalityTests.DEFAULT,
            init: function() {
                if (L.isHash(arguments[0]))
                    this._super.apply(this, arguments);
                else {
                    var e = Array.prototype.slice.call(arguments),
                        t = e.pop();
                    this._super({
                        dependencies: e,
                        observerCallback: t
                    })
                }
            },
            registerOnDefinition: function(e, t) {
                this._super.apply(this, arguments), this.keyOnObject = t;
                var r = this;
                this._invokeObserverCallbackIfNeeded = this._invokeObserverCallbackIfNeeded || (this._invokeObserverCallbackIfNeeded = function() {
                    var e = r.dependencies,
                        i = r.observerCallback,
                        n = r.constructor._collector;
                    n.length = e.length;
                    var a = !1;
                    r._shouldForceNextInvocationOfObserverCallback && (r._shouldForceNextInvocationOfObserverCallback = !1, a = !0);
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o],
                            d = this.getPath(s),
                            l = "_lastValueSeenByObserver_" + t + "_forDependency_" + s,
                            c = this[l];
                        this[l] = d, !a && r.decideRequiresUpdate(d, c, s) && (a = !0), n[o] = d
                    }
                    a && i.apply(this, n), n.length = 0
                }), e[this.keyOnObject] = e[this.keyOnObject] || (e[this.keyOnObject] = function() {
                    r._shouldForceNextInvocationOfObserverCallback = !0, r._invokeObserverCallbackIfNeeded.call(this)
                });
                for (var i = this.dependencies, n = 0; n < i.length; n++)
                    e.isInitialized ? e._observe(i[n], this._invokeObserverCallbackIfNeeded) : e._listen(i[n], this._invokeObserverCallbackIfNeeded)
            },
            unregisterFromDefinition: function(e, t) {
                this._super.apply(this, arguments);
                for (var r = this.dependencies, i = 0; i < r.length; i++)
                    e._unlisten(r[i], this._invokeObserverCallbackIfNeeded)
            }
        }), L.observer = L.ObserverMetadata.create.bind(L.ObserverMetadata), L.Property = L.Metadata.extend({
            staticMembers: {
                extend: function(e) {
                    return 1 !== arguments.length || L.isHash(e) ? this._super.apply(this, arguments) : this._super({
                        defaultValue: e
                    })
                }
            },
            hasAccessors: !0,
            readOnly: !1,
            defaultValue: void 0,
            get: null,
            set: null,
            keyOnObject: null,
            storageKeyOnObject: null,
            _defaultGetter: function(e) {
                return e
            },
            _defaultSetter: function(e) {
                return e
            },
            _internalGetterForObject: function(e) {
                return this.get.call(e, e[this.storageKeyOnObject])
            },
            _internalSetterForObject: function(e, t) {
                e[this.storageKeyOnObject] = this.set.call(e, t)
            },
            init: function(e) {
                var t = this;
                if (1 !== arguments.length || L.isHash(e) ? this._super.apply(this, arguments) : this._super({
                    defaultValue: e
                }), this.get || (this.get = this._defaultGetter), this.readOnly) {
                    if (this.set)
                        throw "Cannot include both `readOnly` and `set`.";
                    this.set = function(e) {
                        if (t._isAwakeningInReadOnlyMode)
                            return t._isAwakeningInReadOnlyMode = !1, e;
                        throw "Cannot write to a read-only property"
                    }
                } else
                    this.set || (this.set = this._defaultSetter)
            },
            registerOnDefinition: function(e, t) {
                this._super.apply(this, arguments), this.keyOnObject = t;
                var r = this.storageKeyOnObject = "_internalValue_for_" + t;
                this._internalGetterForObject = this._internalGetterForObject.bind(this), this._internalSetterForObject = this._internalSetterForObject.bind(this);
                var i = this;
                Object.defineProperty(e, t, {
                    get: function() {
                        return this.isInitialized ? i._internalGetterForObject(this) : this[r]
                    },
                    set: function(e) {
                        if (!this.isInitialized)
                            return void (this[r] = e);
                        i._internalSetterForObject(this, e)
                    }
                }), e[t] = this.defaultValue
            },
            unregisterFromDefinition: function(e, t) {
                L.reusableObject[t] = void 0;
                var r = Object.getOwnPropertyDescriptor(L.reusableObject, t);
                delete L.reusableObject[t], Object.defineProperty(e, t, r), delete e["_internalValue_for_" + t], this._super.apply(this, arguments)
            },
            awakenForObjectWithValue: function(e, t) {
                this.readOnly && (this._isAwakeningInReadOnlyMode = !0), t instanceof Function && (t = t.call(e)), e[this.keyOnObject] = t
            }
        }), L.property = L.Property.extend.bind(L.Property), L.ObservableProperty = L.Property.extend({
            isCacheable: !1,
            dependencies: [],
            writeDependencies: [],
            decideRequiresUpdate: L.InequalityTests.DEFAULT,
            _internalSetterForObject: function(e) {
                this._super.apply(this, arguments), this.invalidateForObject(e)
            },
            _internalGetterForObject: function(e) {
                if (!this.isCacheable)
                    return this._super.apply(this, arguments);
                var t = this.cacheExistenceKeyOnObject;
                if (e[t])
                    return e[this.cacheStorageKeyOnObject];
                var r = this._super.apply(this, arguments);
                return e[t] = !0, e[this.cacheStorageKeyOnObject] = r, r
            },
            invalidateForObject: function(e) {
                e[this.cacheExistenceKeyOnObject] = !1, e[this.cacheStorageKeyOnObject] = void 0, e.trigger(this.keyOnObject)
            },
            registerOnDefinition: function(e, t) {
                this._super.apply(this, arguments);
                var r = this;
                this.cacheStorageKeyOnObject = "_cacheStorageForProperty_" + t, this.cacheExistenceKeyOnObject = "_cacheExistenceForProperty_" + t, L.observer({
                    dependencies: this.dependencies,
                    observerCallback: function() {
                        r.invalidateForObject(this)
                    },
                    decideRequiresUpdate: this.decideRequiresUpdate
                }).registerOnDefinition(e, "_dependencyObserverForProperty_" + t), this.didChange && L.observer({
                    dependencies: [t],
                    observerCallback: this.didChange,
                    decideRequiresUpdate: this.decideRequiresUpdate
                }).registerOnDefinition(e, "_didChangeObserverForProperty_" + t)
            }
        }), L.observableProperty = L.ObservableProperty.extend.bind(L.ObservableProperty), L.ProxyProperty = L.ObservableProperty.extend({
            proxyPath: null,
            decode: function(e) {
                return e
            },
            encode: function(e) {
                return e
            },
            init: function(e) {
                var t = "string" == typeof e ? e : e.proxyPath;
                if (!t)
                    throw "A proxyPath must be configured on a ProxyProperty.";
                this.dependencies = [t];
                var r = this;
                this.get = function() {
                    return r.decode(this.getPath(r.proxyPath))
                }, e && e.readOnly || (this.set = function(e) {
                    this.setPath(r.proxyPath, r.encode(e))
                }), "string" == typeof e ? this._super({
                    proxyPath: e
                }) : this._super.apply(this, arguments)
            }
        }), L.proxyProperty = L.ProxyProperty.create.bind(L.ProxyProperty), L.boundFunction = function(e) {
            return L.property(function() {
                return e.bind(this)
            })
        }, t.a = L
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i = {
            default: "full",
            FULL: "full",
            HINT: "hint",
            LOOP: "loop"
        }
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            a = navigator.userAgent.toLowerCase(),
            o = /\sedge\//.test(a),
            s = function() {
                function e() {
                    i(this, e)
                }
                return n(e, null, [{
                    key: "isEdge",
                    get: function() {
                        return o
                    }
                }, {
                    key: "isChrome",
                    get: function() {
                        return e._isChrome
                    }
                }, {
                    key: "isSafari",
                    get: function() {
                        return e._isSafari
                    }
                }, {
                    key: "isFirefox",
                    get: function() {
                        return e._isFirefox
                    }
                }, {
                    key: "isIE",
                    get: function() {
                        return e._isIE
                    }
                }, {
                    key: "isIOS",
                    get: function() {
                        return e._isIOS
                    }
                }]), e
            }();
        t.a = s, s._isChrome = !s.isEdge && /chrome/.test(a), s._isSafari = !s.isEdge && !s.isChrome && /safari/.test(a), s._isFirefox = !s.isEdge && !s.isChrome && !s.isSafari && /firefox/.test(a), s._isIE = !s.isEdge && !s.isChrome && !s.isSafari && !s.isFirefox && /trident|msie/.test(a), s._isIOS = !!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b.*\bOS \d+_\d+/i)
    }, function(e, t, r) {
        "use strict";
        var i = r(10),
            n = r(1);
        r.d(t, "a", function() {
            return a
        });
        var a = {
            _mappingToLocalizedStrings: {
                live: "Live",
                get bounce() {
                    return i.a.getString("VideoEffects.Badge.Title.Bounce")
                },
                get exposure() {
                    return i.a.getString("VideoEffects.Badge.Title.LongExposure")
                },
                get loop() {
                    return i.a.getString("VideoEffects.Badge.Title.Loop")
                }
            },
            _mappingToPlaybackStyle: {
                bounce: n.a.LOOP,
                exposure: n.a.FULL,
                live: n.a.FULL,
                loop: n.a.LOOP
            },
            default: "live",
            BOUNCE: "bounce",
            EXPOSURE: "exposure",
            LIVE: "live",
            LOOP: "loop",
            toBadgeText: function(e) {
                return this.toLocalizedString(e).toLocaleUpperCase()
            },
            toLocalizedString: function(e) {
                return this._mappingToLocalizedStrings[e || a.default]
            },
            toPlaybackStyle: function(e) {
                return this._mappingToPlaybackStyle[e || n.a.default]
            }
        }
    }, function(e, t, r) {
        "use strict";
        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var n = r(0),
            a = r(7),
            o = r(82),
            s = r(81),
            d = r(83),
            l = r(9),
            c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            u = n.a.Object.extend({
                layerName: null,
                renderLayerClass_dom: null,
                renderLayerMixin: {},
                init: function(e) {
                    this._super(), this.renderLayerMixin = e
                },
                getRenderLayer: function(e, t) {
                    return this["renderLayerClass_" + e.approach].extend(this.renderLayerMixin, {
                        layerName: this.layerName
                    }).create(e, t)
                }
            }),
            h = u.extend({
                renderLayerClass_dom: o.a
            }),
            p = u.extend({
                renderLayerClass_dom: s.a
            }),
            f = u.extend({
                renderLayerClass_dom: d.a
            }),
            v = n.a.Object.extend({
                staticMembers: {
                    PhotoIngredient: h,
                    InterpolatedVideoIngredient: p,
                    VideoIngredient: f,
                    computedStyle: a.a.computedStyle,
                    getRecipeFromPlaybackStyle: function(e) {
                        return this._recipesByPlaybackStyle[e]
                    },
                    registerRecipeWithPlaybackStyle: function(e, t) {
                        this._recipesByPlaybackStyle = c({}, this._recipesByPlaybackStyle, i({}, t, e))
                    }
                },
                correspondingPlaybackStyle: null,
                get name() {
                    return "recipe_for_playbackStyle_" + this.correspondingPlaybackStyle
                },
                minimumShortenedDuration: 0,
                spontaneousFinishDuration: 0,
                ingredients: null,
                requiresInterpolation: !1,
                init: function(e) {
                    this.ingredients = [], this._super();
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            var r = e[t];
                            this[t] = r, u.isClassFor(r) && (r.layerName = t, this.ingredients.push(r))
                        }
                    this.correspondingPlaybackStyle && v.registerRecipeWithPlaybackStyle(this, this.correspondingPlaybackStyle)
                },
                getRenderLayers: function(e) {
                    for (var t, r = [], i = 0; t = this.ingredients[i]; i++)
                        t.isDisabled || r.push(t.getRenderLayer(e, this));
                    return r
                },
                beginFinishingPlaybackEarly: function(e) {
                    if (!e.isPlaying)
                        return void (e.wantsToPlay = !1);
                    e.duration = Math.min(e.duration, Math.max(this.minimumShortenedDuration, e.currentTime + this.spontaneousFinishDuration))
                },
                calculateAnimationDuration: function(e, t, r) {
                    return t || 0
                },
                continuePlayback: function(e) {
                    e.currentTime < e.duration ? e._rafID = requestAnimationFrame(e._nextFrame.bind(e)) : (e.stop(), e.dispatchEvent(r.i(l.f)()))
                },
                register: function() {},
                requestMoreCompatibleRecipe: function() {
                    return this
                }
            });
        t.a = v
    }, function(e, t, r) {
        "use strict";
        var i = r(12),
            n = {
                debug: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    i.a && console.debug.apply(console, arguments)
                },
                log: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    i.a && console.log.apply(console, arguments)
                },
                info: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    i.a && console.info.apply(console, arguments)
                },
                warn: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        r[i - 1] = arguments[i];
                    console.warn.apply(console, arguments)
                },
                error: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        r[i - 1] = arguments[i];
                    console.error.apply(console, arguments)
                }
            };
        t.a = n
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i;
        !function(e) {
            e[e.FAILED_TO_DOWNLOAD_RESOURCE = 0] = "FAILED_TO_DOWNLOAD_RESOURCE", e[e.PHOTO_FAILED_TO_LOAD = 1] = "PHOTO_FAILED_TO_LOAD", e[e.VIDEO_FAILED_TO_LOAD = 2] = "VIDEO_FAILED_TO_LOAD"
        }(i || (i = {}))
    }, function(e, t, r) {
        "use strict";
        var i = r(8),
            n = r(0),
            a = i.a.extend({
                _hasBeenDisposed: !1,
                staticMembers: {
                    computedStyle: function(e) {
                        return e._lpk_isComputedStyle = !0, e
                    }
                },
                recipe: n.a.observableProperty(),
                renderer: n.a.observableProperty(),
                duration: n.a.proxyProperty("renderer.duration"),
                canRender: n.a.observableProperty(!1),
                computedStyles: n.a.property(function() {
                    return []
                }),
                displayWidth: 0,
                displayHeight: 0,
                shouldLoop: !1,
                init: function(e, t) {
                    this.renderer = e, this.recipe = t, this._super();
                    for (var r in this) {
                        var i = this[r];
                        i && i._lpk_isComputedStyle && this.computedStyles.push({
                            styleKey: r,
                            getter: i
                        })
                    }
                },
                updateSize: function(e, t) {
                    if (!arguments.length)
                        return this.updateSize(this.displayWidth, this.displayHeight);
                    this.displayWidth = e, this.displayHeight = t
                },
                setUpForRender: function() {},
                tearDownFromRender: function() {
                    this.reduceMemoryFootprint()
                },
                reduceMemoryFootprint: function() {},
                _canRenderDidChange: n.a.observer("canRender", "renderer._lastRecipe", function(e, t) {
                    var r = this.recipe,
                        i = this.renderer;
                    this._hasBeenDisposed || (!e || !t || t !== r && i._hasInitialized ? this.tearDownFromRender() : (i._hasInitialized = !0, this.setUpForRender(), this.updateSize()))
                }),
                prepareToRenderAtTime: function() {
                    return !0
                },
                canRenderAtTime: function() {
                    return !0
                },
                renderAtTime: function(e) {
                    if (!arguments.length)
                        return this.renderAtTime(this._lastRenderedTime);
                    this._lastRenderedTime = e;
                    for (var t, r = 0; t = this.computedStyles[r]; r++)
                        t.value = t.getter.call(this, e);
                    this.renderStyles(this.computedStyles)
                },
                renderStyles: function(e) {},
                dispose: function() {
                    this.detach(), this._hasBeenDisposed = !0
                }
            });
        t.a = a
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = i.a.Object.extend({
                element: null,
                _lpk_isView: !0,
                tagName: "div",
                eventDispatchingElement: null,
                init: function(e) {
                    e ? this.element = e : this.tagName && (this.element = document.createElement(this.tagName)), this._super()
                },
                attachInto: function(e, t, r) {
                    if (!this.element)
                        return void (this.parentView = e);
                    t || (t = e.element), r && r._lpk_isView && (r = r.element), r ? t.insertBefore(this.element, r) : t.appendChild(this.element), this.parentView = e
                },
                detach: function() {
                    this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.parentView = null
                },
                dispatchEvent: function(e) {
                    var t = this.eventDispatchingElement || this.element;
                    if (!t)
                        throw "Cannot dispatch an event from a view with no DOM element.";
                    t.dispatchEvent.call(t, e)
                },
                parentView: i.a.observableProperty(null)
            });
        t.a = n
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            return function(t) {
                return new CustomEvent(e, {
                    detail: t
                })
            }
        }
        var n = r(14);
        r.d(t, "a", function() {
            return a
        }), r.d(t, "b", function() {
            return o
        }), r.d(t, "f", function() {
            return s
        }), r.d(t, "e", function() {
            return d
        }), r.d(t, "c", function() {
            return l
        }), r.d(t, "d", function() {
            return c
        }), function() {
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
            }
            if ("function" == typeof window.CustomEvent)
                return !1;
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }();
        var a = i(n.a.LIVEPHOTOSKIT_LOADED),
            o = i("canplay"),
            s = i("ended"),
            d = i("error"),
            l = i("photoload"),
            c = i("videoload")
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = ["ar-sa", "ca-cs", "cs-cz", "da-dk", "nl-nl", "pt-br", "pt-pt", "no-no", "el-gr", "en-us", "fi-fi", "fr-fr", "de-de", "he-il", "hr-hr", "hu-hu", "id-id", "it-it", "ja-jp", "ko-kr", "ms-my", "pl-pl", "ro-ro", "ru-ru", "zh-cn", "zh-tw", "sk-sk", "es-es", "sv-se", "th-th", "tr-tr", "uk-ua", "vi-vi"],
            a = {
                "es-419": "es-es",
                pt: "pt-pt",
                no: "no-no",
                nb: "no-no",
                nn: "no-no",
                zh: "zh-cn",
                "zh-Hans": "zh-cn",
                "zh-Hant": "zh-tw",
                "zh-HK": "zh-tw",
                "zh-MO": "zh-tw",
                "zh-SG": "zh-cn"
            },
            o = {};
        for (var s in a) {
            var d = a[s],
                l = o[d] || [];
            o[d] = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }(l), [s])
        }
        for (var c = {}, u = 0; u < n.length; u++) {
            var h = n[u];
            try {
                var p = r(21)("./" + h + ".lproj/strings.json"),
                    f = h.split("-")[0],
                    v = o[h];
                if (c[h] = p, c[f] || (c[f] = p), v)
                    for (var y in v)
                        c[y] = p
            } catch (e) {}
        }
        var g = function(e) {
                var t = m.locale,
                    r = m.strings;
                return (r[t] || r["en-us"])[e] || ""
            },
            m = i.a.Object.extend({
                locale: i.a.observableProperty({
                    get: function(e) {
                        return e || window.navigator.language
                    },
                    set: function(e) {
                        return e
                    }
                }),
                getString: g,
                strings: c
            }).create();
        t.a = m
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function n(e) {
            var t = parseFloat(e);
            if (+t === t)
                return t;
            var r = "true" === e || "false" !== e && void 0;
            return !!r === r ? r : e
        }
        var a = r(70),
            o = r(0),
            s = r(5),
            d = r(1),
            l = r(3),
            c = r(12);
        r.d(t, "a", function() {
            return _
        }), r.d(t, "b", function() {
            return P
        }), r.d(t, "c", function() {
            return T
        });
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            h = "property",
            p = {
                play: "method",
                pause: "method",
                stop: "method",
                toggle: "method",
                beginFinishingPlaybackEarly: "method",
                isPlaying: "read_only_property",
                wantsToPlay: "read_only_property",
                currentTime: "read_only_property",
                renderedTime: "read_only_property",
                duration: "read_only_property",
                autoplay: h,
                caption: h,
                playbackStyle: h,
                preloadedEffectType: h,
                updateSize: "method",
                photoWidth: "read_only_property",
                photoHeight: "read_only_property",
                videoWidth: "read_only_property",
                videoHeight: "read_only_property",
                effectType: h,
                proactivelyLoadsVideo: h,
                photoSrc: h,
                photoMimeType: h,
                videoSrc: h,
                videoMimeType: h,
                metadataVideoSrc: h,
                photo: h,
                video: h,
                photoTime: h,
                frameTimes: h,
                videoRotation: h,
                canPlay: "read_only_property",
                loadProgress: "read_only_property",
                errors: "read_only_property",
                showsNativeControls: h,
                observe: "method"
            };
        delete p.observe;
        var f = function() {
                var e = [];
                for (var t in p)
                    p.hasOwnProperty(t) && e.push(t);
                return e
            }(),
            v = {},
            y = f.map(function(e) {
                var t = "data-" + o.a.String.hyphenate(e);
                return v[t] = e, t
            }),
            g = f.map(function(e) {
                return p[e]
            }),
            m = {
                enumerable: !1,
                configurable: !1,
                writable: !1
            },
            b = {
                enumerable: !1,
                configurable: !1
            },
            _ = function(e, t) {
                if (!e)
                    return s.a.warn("LivePhotosKit.augmentElementAsPlayer requires a target element to augment."), null;
                if ("IMG" === e.tagName) {
                    var r = document.createElement("div"),
                        i = e.parentNode,
                        _ = e.getAttribute("src"),
                        P = e.getAttribute("photo-src") || _;
                    e.removeAttribute("src"), e.setAttribute("data-photo-src", P);
                    for (var T = e.attributes, k = 0; k < T.length; k++) {
                        var S = T[k],
                            E = S.nodeName,
                            O = S.value;
                        r.setAttribute(E, O)
                    }
                    i.insertBefore(r, e), i.removeChild(e), e = r
                }
                var w = void 0,
                    L = void 0,
                    C = e;
                if (C.__isLPKPlayer__)
                    return C;
                m.value = !0, Object.defineProperty(C, "__isLPKPlayer__", m);
                var F = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    c.a && !e.videoSrc && e.photoSrc ? s.a.warn("Changing a `photoSrc` independent of its `videoSrc` can result in unexpected behavior") : c.a && e.videoSrc && !e.photoSrc && s.a.warn("Changing a `videoSrc` independent of its `photoSrc` can result in unexpected behavior");
                    var t = L ? {
                            photoSrc: L.photo,
                            videoSrc: L.videoSrc,
                            effectType: L.effectType,
                            autoplay: L.autoplay,
                            proactivelyLoadsVideo: L.proactivelyLoadsVideo
                        } : {},
                        r = u({}, t, e),
                        i = (r.photoSrc, r.videoSrc, r.effectType),
                        n = r.autoplay,
                        f = r.proactivelyLoadsVideo;
                    w = o.a.objectPool.get(), r.preloadedEffectType = i, r.autoplay = !1 !== n;
                    var v = i || l.a.default;
                    l.a.toPlaybackStyle(v) === d.a.LOOP && r.autoplay && (c.a && !f && s.a.warn("When using a looping asset you should set `proactivelyLoadsVideo` to `true` unless `autoplay` is also set to `false`"), r.proactivelyLoadsVideo = !0);
                    for (var y in r)
                        Object.prototype.hasOwnProperty.call(r, y) && (p[y] === h ? w[y] = r[y] : s.a.warn("LivePhotosKit.Player: Initial configuration for `" + y + "` was ignored, because the property is not a writable property."));
                    if (L)
                        for (var g in w) {
                            var m = w[g];
                            L[g] = m
                        }
                    else
                        L = a.a.create(C, w);
                    o.a.objectPool.ret(w), w = null
                };
                C.setProperties = F, C.setProperties(t);
                for (var B, V, R = 0; (B = f[R]) && (V = g[R]); R++)
                    !function(e, t, r) {
                        "method" === r ? (m.value = L[t].bind(L), Object.defineProperty(C, t, m)) : (b.set = r === h ? function(e) {
                            L[t] = e
                        } : function() {}, b.get = function() {
                            return L[t]
                        }, Object.defineProperty(C, t, b))
                    }(0, B, V);
                m.value = function() {
                    var e = arguments.length,
                        t = arguments[e - 1];
                    if (e < 1 || !(t instanceof Function))
                        throw new Error("Invalid arguments passed to `observe`. Form: key, [key, â€¦], callback.");
                    for (var r = o.a.arrayPool.get(), i = 0, n = e; i < n; i++)
                        r[i] = arguments[i];
                    for (var a = 0, s = e - 1; a < s; a++) {
                        var d = p[r[a]];
                        if (d !== h && "read_only_property" !== d)
                            throw new Error("Can't observe non-observable property '" + r[a] + "'.")
                    }
                    r[e - 1] = t.bind(this);
                    var l = L.observe.apply(L, r);
                    return o.a.arrayPool.ret(r), new x(l, L)
                }, Object.defineProperty(C, "observe", m);
                for (var B, V, j, R = 0; (B = f[R]) && (V = g[R]) && (j = y[R]); R++)
                    if (V === h) {
                        var I = C.getAttribute(j);
                        I && ("effectType" === B ? L.preloadedEffectType = n(I) : L[B] = n(I))
                    }
                var A = C.setAttribute;
                m.value = function(e, t) {
                    var r = v[e];
                    if (!r)
                        return void A.apply(this, arguments);
                    this[r] = n(t)
                }, Object.defineProperty(C, "setAttribute", m);
                var D = C.removeAttribute;
                m.value = function(e) {
                    var t = v[e];
                    if (!t)
                        return D.apply(this, arguments);
                    this[t] = null
                }, Object.defineProperty(C, "removeAttribute", m);
                for (var M, U, N, z = 0; (M = f[z]) && (U = g[z]) && (N = y[z]); z++) {
                    (function(e, t, r, i) {
                        if (r !== h && "read_only_property" !== r)
                            return "continue";
                        C.observe(t, function(e) {
                            void 0 === e || null === e || "string" != typeof e && +e !== e && "boolean" != typeof e ? D.call(this, i) : A.call(this, i, String(e))
                        })
                    })(0, M, U, N)
                }
                return "" !== C.getAttribute("data-live-photo") && C.setAttribute("data-live-photo", ""), m.value = L, Object.defineProperty(C, "__internalLPKPlayer__", m), m.value = void 0, b.set = b.get = void 0, C
            },
            P = function(e) {
                var t = document.createElement("div");
                return _(t, e)
            },
            T = function(e, t) {
                if (arguments.length >= 3 || "string" == typeof arguments[0] && "string" == typeof arguments[1])
                    throw new Error("LivePhotosKit.Player: Creating a new Player using arguments of the form 'photoSrc, videoSrc, [targetElement, [options]]' is no longer supported. Instead, use the new signature, '[targetElement, [options]]");
                return s.a.warn("The `LivePhotosKit.Player` method will be deprecated in an upcoming release. Please use the `LivePhotosKit.augementElementAsPlayer` or `LivePhotosKit.createPlayer` methods, instead."), e ? _(e, t) : P(t)
            },
            x = function e(t, r) {
                i(this, e), this.fire = function() {
                    r[t.keyOnObject]()
                }, this.disconnect = function() {
                    t.unregisterFromDefinition(r)
                }, this.connect = function() {
                    t.registerOnDefinition(r)
                }
            }
    }, function(e, t, r) {
        "use strict";
        var i = /_lpk_debug=true/i;
        t.a = i.test(window.location.search) || i.test(window.location.hash)
    }, function(e, t, r) {
        "use strict";
        var i = {
            setUpForRender: function() {
                this.attachInto(this.renderer)
            },
            tearDownFromRender: function() {
                this.detach(), this._super()
            },
            renderStyles: function(e) {
                for (var t, r = this.element, i = r.style, n = 0; t = e[n]; n++) {
                    var a = t,
                        o = a.styleKey,
                        s = a.value;
                    i[o] !== s && (i[o] = s)
                }
            }
        };
        t.a = i
    }, function(e, t, r) {
        "use strict";
        var i = r(64),
            n = r(65),
            a = r(98);
        t.a = {
            APP_NAME: "LivePhotosKit",
            BUILD_NUMBER: i.a,
            MASTERING_NUMBER: n.a,
            FEEDBACK_URL_PREFIX: "https://feedbackws.icloud.com",
            LIVEPHOTOSKIT_LOADED: "livephotoskitloaded",
            URL_PREFIX: "https://cdn.apple-livephotoskit.com",
            VERSION: a.a
        }
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = r(3),
            a = r(93),
            o = r(18),
            s = r(10),
            d = r(1);
        r.d(t, "a", function() {
            return u
        });
        var l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            c = {
                element: null,
                label: "",
                labelPadding: 6,
                leftPadding: 5,
                height: 25,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                itemColor: "rgb(0, 0, 0)",
                fontSize: 9,
                borderRadius: 5,
                dottedRadius: 8.5,
                innerRadius: 5.25,
                zIndex: 4,
                shouldAnimateProgressRing: !0,
                progressRingAnimationSpeed: 300,
                shouldAddEventListeners: !0,
                effectType: null,
                playbackStyle: null,
                configurePlayAction: r.i(a.a)(),
                configureStopAction: r.i(a.a)()
            },
            u = function() {
                function e() {
                    var t = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e), this._setInstanceProps(r), this._createCanvas(), this.redraw(), this._addEventListeners(), s.a.observe("locale", function() {
                        return t.updateBadgeText()
                    })
                }
                return l(e, [{
                    key: "attachPlayerInstance",
                    value: function(e) {
                        e.attachBadgeView(this), this.updateBadgeText(e.effectType)
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        var e = this.progress;
                        e > 0 && this.shouldAnimateProgressRing ? this._animateProgressRing() : this._redraw(e)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = this._requestedFrame;
                        e && cancelAnimationFrame(e), this._progress = 0, this._previousProgress = 0, this.redraw()
                    }
                }, {
                    key: "appendTo",
                    value: function(e) {
                        e.appendChild(this.element)
                    }
                }, {
                    key: "updateAriaLabel",
                    value: function() {
                        var e = n.a.toLocalizedString(this.effectType),
                            t = s.a.getString("VideoEffects.Badge");
                        this.element.setAttribute("aria-label", t + ": " + e)
                    }
                }, {
                    key: "updateBadgeText",
                    value: function(e) {
                        e ? this.effectType = e : e = this.effectType, this.label = e ? n.a.toBadgeText(e) : "", this.playbackStyle = n.a.toPlaybackStyle(e), this.updateAriaLabel(), this._redraw()
                    }
                }, {
                    key: "_createCanvas",
                    value: function() {
                        var e = this.element;
                        if (e) {
                            if ("canvas" !== e.tagName.toLowerCase())
                                throw new Error("Backing element for LivePhotoBadge needs to be an HTMLCanvasElement.")
                        } else
                            e = this.element = document.createElement("canvas");
                        e.setAttribute("role", "button"), this.updateAriaLabel(), e.classList.add("lpk-badge"), this._context = e.getContext("2d")
                    }
                }, {
                    key: "_setCanvasSize",
                    value: function() {
                        var e = this.element,
                            t = o.a(),
                            r = this.height,
                            i = this.width;
                        e.height = r * t, e.width = i * t, e.style.height = r + "px", e.style.width = i + "px"
                    }
                }, {
                    key: "_setInstanceProps",
                    value: function(e) {
                        var t = {};
                        for (var r in c)
                            t.hasOwnProperty.call(c, r) && (this[r] = e.hasOwnProperty(r) ? e[r] : c[r]);
                        this.defaultProps = c
                    }
                }, {
                    key: "_redraw",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = (this.element, this.label),
                            r = t.toLowerCase() || n.a.default;
                        this._setCanvasSize(), this._context.clearRect(0, 0, this.width, this.height), this._drawBackground(), this._drawLabel(), this.shouldShowError || (this._drawInnerCircle(), n.a.toPlaybackStyle(r) !== d.a.LOOP ? this._drawPlayArrow() : this._drawLoopCircle()), this.shouldShowError ? (this._drawProgressRing(1), this._drawErrorSlash()) : this.progress > 0 ? this._drawProgressRing(e) : this._drawDottedCircle()
                    }
                }, {
                    key: "_drawBackground",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = this.borderRadius * e,
                            i = this.width * e,
                            n = this.height * e;
                        t.beginPath(), t.moveTo(r, 0), t.lineTo(i - r, 0), t.quadraticCurveTo(i, 0, i, r), t.lineTo(i, n - r), t.quadraticCurveTo(i, n, i - r, n), t.lineTo(r, n), t.quadraticCurveTo(0, n, 0, n - r), t.lineTo(0, r), t.quadraticCurveTo(0, 0, r, 0), t.closePath(), t.fillStyle = this.backgroundColor, t.fill()
                    }
                }, {
                    key: "_drawDottedCircle",
                    value: function() {
                        for (var t = e.numberOfDots, r = this.dottedRadius * o.a(), i = 0; i < t; i++) {
                            var n = this.x0 + r * Math.cos(2 * Math.PI * i / t),
                                a = this.y0 + r * Math.sin(2 * Math.PI * i / t);
                            this._drawDot(n, a)
                        }
                    }
                }, {
                    key: "_drawDot",
                    value: function(e, t) {
                        var r = this._context,
                            i = 1 === o.a() ? 1 : 1.25;
                        r.beginPath(), r.arc(e, t, i, 0, 2 * Math.PI), r.fillStyle = this.itemColor, r.fill()
                    }
                }, {
                    key: "_drawInnerCircle",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = this.innerRadius * e;
                        t.beginPath(), t.arc(this.x0, this.y0, r, 0, 2 * Math.PI), t.lineWidth = 1 === e ? 1.25 : 1.5, t.strokeStyle = this.itemColor, t.stroke()
                    }
                }, {
                    key: "_drawPlayArrow",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = 5 * e,
                            i = 4 * e,
                            n = this.x0 + .5 * e,
                            a = this.y0;
                        t.beginPath(), t.moveTo(n - i / 2, a - r / 2), t.lineTo(n + i / 2, a), t.lineTo(n - i / 2, a + r / 2), t.fillStyle = this.itemColor, t.fill()
                    }
                }, {
                    key: "_drawLoopCircle",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = 2 * e;
                        t.beginPath(), t.arc(this.x0, this.y0, r, 0, 2 * Math.PI), t.fillStyle = this.itemColor, t.fill()
                    }
                }, {
                    key: "_drawLabel",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = (this.leftPadding + 2 * this.dottedRadius + this.labelPadding) * e,
                            i = (this.height / 2 + 4.5) * e;
                        t.fillStyle = this.itemColor, t.font = this.fontStyle, t.fillText(this.label, r, i)
                    }
                }, {
                    key: "_drawProgressRing",
                    value: function(e) {
                        var t = o.a(),
                            r = this._context,
                            i = this.dottedRadius * t,
                            n = 2 * Math.PI * .75,
                            a = (.75 + e) * (2 * Math.PI);
                        r.beginPath(), r.arc(this.x0, this.y0, i, n, a, !1), r.lineWidth = 1.5 * t, r.strokeStyle = this.itemColor, r.stroke()
                    }
                }, {
                    key: "_drawErrorSlash",
                    value: function() {
                        var e = o.a(),
                            t = this._context,
                            r = this.dottedRadius * e,
                            i = r * Math.sqrt(2) / 2;
                        t.beginPath(), t.moveTo(this.x0 + i, this.y0 + i), t.lineTo(this.x0 - i, this.y0 - i), t.lineWidth = 1.5 * e, t.strokeStyle = this.itemColor, t.stroke()
                    }
                }, {
                    key: "_animateProgressRing",
                    value: function() {
                        var e = this,
                            t = this.progress,
                            r = this._previousProgress || 0,
                            i = Math.abs(t - r),
                            n = t < r;
                        n && (t = r, r = this.progress);
                        for (var a = i * this.progressRingAnimationSpeed, o = a / (1e3 / 60), s = i / o, d = [], l = 0, c = o; l < c; l++)
                            d.push(r + l * s);
                        d[d.length - 1] = t, n && d.reverse();
                        !function t() {
                            var r = d.shift();
                            e._redraw(r), d.length && (e._requestedFrame = window.requestAnimationFrame(t)), 1 === r && window.setTimeout(function() {
                                e.progress = 0
                            }, .25 * e.progressRingAnimationSpeed)
                        }()
                    }
                }, {
                    key: "_addEventListeners",
                    value: function() {
                        var e = this,
                            t = this.element,
                            r = void 0;
                        t.addEventListener("mouseup", function() {
                            r = window.setTimeout(function() {
                                e.configurePlayAction()
                            }, 0)
                        }), t.addEventListener("mouseenter", function() {
                            r = window.setTimeout(function() {
                                e.configurePlayAction()
                            }, 0)
                        }), t.addEventListener("mouseleave", function() {
                            r && window.clearTimeout(r), e.configureStopAction()
                        })
                    }
                }, {
                    key: "width",
                    get: function() {
                        var e = this._context;
                        if (!e)
                            return 0;
                        var t = this.dottedRadius,
                            r = this.fontStyle,
                            i = this.label,
                            n = this.labelPadding,
                            a = this.leftPadding;
                        e.font = r;
                        var s = e.measureText(i);
                        this._textMetrics = s;
                        var d = i.length > 0 ? s.width : 0;
                        return this._width = (d > 2 ? a : -2) + 2 * t + 2 * n + Math.ceil(d / o.a())
                    }
                }, {
                    key: "fontStyle",
                    get: function() {
                        return this.fontSize * o.a() + 'pt/1 system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica'
                    }
                }, {
                    key: "x0",
                    get: function() {
                        return (this.dottedRadius + this.leftPadding) * o.a()
                    }
                }, {
                    key: "y0",
                    get: function() {
                        return this.height / 2 * o.a()
                    }
                }, {
                    key: "progress",
                    set: function(e) {
                        "number" == typeof e && (this._previousProgress = this._progress, this._progress = e, this.redraw())
                    },
                    get: function() {
                        return this._progress
                    }
                }, {
                    key: "shouldShowError",
                    set: function(e) {
                        this._shouldShowError = !!e, this._redraw(this.progress)
                    },
                    get: function() {
                        return this._shouldShowError
                    }
                }], [{
                    key: "numberOfDots",
                    get: function() {
                        return 1 === o.a() ? 17 : 26
                    }
                }]), e
            }()
    }, function(e, t, r) {
        "use strict";
        var i = r(73),
            n = r(0),
            a = r(6),
            o = i.a.extend({
                mimeType: n.a.observableProperty({
                    dependencies: ["_mimeTypeFromXHR"],
                    get: function(e) {
                        return this._mimeTypeFromXHR || e || null
                    }
                }),
                _mimeTypeFromXHR: n.a.observableProperty(),
                requiresMimeTypeForRawArrayBufferSrc: !0,
                exposedMimeTypeKeyForErrorStrings: "mimeType",
                exposedSrcKeyForErrorStrings: "src",
                abortCurrentLoad: function() {
                    this.__xhr && (this._detachXHR(), this._xhr.abort()), this._mimeTypeFromXHR = null, this.abortCurrentSecondaryLoad()
                },
                loadSrc: function(e) {
                    if ("string" == typeof e) {
                        this._mimeTypeFromXHR = null, this._attachXHR();
                        var t = this._xhr;
                        t.open("GET", e), t.responseType = "arraybuffer", t.send(null)
                    } else if (e instanceof ArrayBuffer) {
                        if (!this.mimeType && this.requiresMimeTypeForRawArrayBufferSrc)
                            throw new Error("MIME Type must be assigned to `" + this.exposedMimeTypeKeyForErrorStrings + "` prior to assigning a raw ArrayBuffer to `" + this.exposedSrcKeyForErrorStrings + "`.");
                        this.beginSecondaryLoad(e, this.mimeType)
                    }
                },
                get _xhr() {
                    var e = this.__xhr;
                    return e || (e = this.__xhr = new XMLHttpRequest), e
                },
                _detachXHR: function() {
                    var e = this._xhr;
                    e.removeEventListener("progress", this._xhrProgress), e.removeEventListener("readystatechange", this._xhrReadyStateChanged)
                },
                _attachXHR: function() {
                    var e = this._xhr;
                    e.addEventListener("progress", this._xhrProgress), e.addEventListener("readystatechange", this._xhrReadyStateChanged)
                },
                _xhrReadyStateChanged: function() {
                    if ("loading" === this.state) {
                        if (this._xhr.readyState >= 2 && 200 !== this._xhr.status) {
                            var e = new Error("Failed to download resource from URL assigned to '" + this.exposedSrcKeyForErrorStrings + "'.");
                            return e.errCode = a.a.FAILED_TO_DOWNLOAD_RESOURCE, this.loadDidFail(e)
                        }
                        return 4 === this._xhr.readyState && 200 === this._xhr.status ? this._xhrLoadDidFinish() : void 0
                    }
                },
                _xhrProgress: function(e) {
                    if (e && e.total) {
                        var t = (+e.loaded || 0) / e.total;
                        +t === t && (this.progress = Math.max(0, Math.min(1, t)))
                    }
                },
                _xhrLoadDidFinish: function() {
                    this._mimeTypeFromXHR = this._xhr.getResponseHeader("Content-Type"), this.beginSecondaryLoad(this._xhr.response, this.mimeType)
                },
                beginSecondaryLoad: function(e, t) {
                    this._defaultSecondaryLoadTimeout = setTimeout(this.loadDidSucceed.bind(this, e), 0)
                },
                abortCurrentSecondaryLoad: function() {
                    this._defaultSecondaryLoadTimeout && (clearTimeout(this._defaultSecondaryLoadTimeout), this._defaultSecondaryLoadTimeout = null)
                },
                init: function() {
                    this._xhrReadyStateChanged = this._xhrReadyStateChanged.bind(this), this._xhrProgress = this._xhrProgress.bind(this), this._super()
                }
            });
        t.a = o
    }, function(e, t, r) {
        "use strict";
        var i = r(2);
        t.a = i.a.isEdge || i.a.isIE
    }, function(e, t, r) {
        "use strict";
        function i() {
            d.forEach(function(e) {
                return e()
            })
        }
        function n(e) {
            d.push(e)
        }
        function a() {
            return window.devicePixelRatio
        }
        function o() {
            return Math.ceil(a())
        }
        t.b = n, t.a = o;
        var s = void 0,
            d = [];
        !function() {
            window.matchMedia && (s = window.matchMedia("only screen and (-webkit-min-device-pixel-ratio:1.3),only screen and (-o-min-device-pixel-ratio:13/10),only screen and (min-resolution:120dpi)"), s.addListener(i))
        }()
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            a = function() {
                function e(t) {
                    var r = this;
                    i(this, e), this._k = [], this._v = [], t && t._k.forEach(function(e) {
                        r.set(e, t.get(e))
                    })
                }
                return n(e, [{
                    key: "_indexOfKey",
                    value: function(e) {
                        return this._k.indexOf(e)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this._indexOfKey(e);
                        return -1 === t ? void 0 : this._v[t]
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        var r = this._indexOfKey(e);
                        return -1 === r && (r = this._k.push(e) - 1), this._v[r] = t, this
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        var t = this._indexOfKey(e);
                        return -1 !== t && (this._k.splice(t, 1), this._v.splice(t, 1), !0)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this._k.length > 0 && (this._k.length = 0, this._v.length = 0)
                    }
                }]), e
            }();
        t.a = a
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            if (null === e)
                return "_null";
            if (void 0 === e)
                return "_undefined";
            if (e.hasOwnProperty("_LPKGUID"))
                return e._LPKGUID;
            var t = void 0 === e ? "undefined" : n(e);
            switch (t) {
            case "number":
                Object.is(e, -0) && (e = "-0");
            case "string":
            case "boolean":
                return t + e;
            case "object":
            case "function":
                o++;
                var r = t + o;
                return a.value = r, Object.defineProperty(e, "_LPKGUID", a), r;
            default:
                throw "unrecognized object type"
            }
        }
        t.a = i;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = {
                value: "",
                enumerable: !1,
                writable: !1,
                configurable: !1
            },
            o = 0
    }, function(e, t, r) {
        function i(e) {
            return r(n(e))
        }
        function n(e) {
            var t = a[e];
            if (!(t + 1))
                throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var a = {
            "./ar-sa.lproj/strings.json": 22,
            "./ca-es.lproj/strings.json": 23,
            "./cs-cz.lproj/strings.json": 24,
            "./da-dk.lproj/strings.json": 25,
            "./de-de.lproj/strings.json": 26,
            "./el-gr.lproj/strings.json": 27,
            "./en-au.lproj/strings.json": 28,
            "./en-ca.lproj/strings.json": 29,
            "./en-gb.lproj/strings.json": 30,
            "./en-nz.lproj/strings.json": 31,
            "./en-us.lproj/strings.json": 32,
            "./es-es.lproj/strings.json": 33,
            "./es-mx.lproj/strings.json": 34,
            "./fi-fi.lproj/strings.json": 35,
            "./fr-ca.lproj/strings.json": 36,
            "./fr-fr.lproj/strings.json": 37,
            "./hi-in.lproj/strings.json": 38,
            "./hr-hr.lproj/strings.json": 39,
            "./hu-hu.lproj/strings.json": 40,
            "./id-id.lproj/strings.json": 41,
            "./it-it.lproj/strings.json": 42,
            "./iw-il.lproj/strings.json": 43,
            "./ja-jp.lproj/strings.json": 44,
            "./ko-kr.lproj/strings.json": 45,
            "./ms-my.lproj/strings.json": 46,
            "./nb-no.lproj/strings.json": 47,
            "./nl-nl.lproj/strings.json": 48,
            "./no-no.lproj/strings.json": 49,
            "./pl-pl.lproj/strings.json": 50,
            "./pt-br.lproj/strings.json": 51,
            "./pt-pt.lproj/strings.json": 52,
            "./ro-ro.lproj/strings.json": 53,
            "./ru-ru.lproj/strings.json": 54,
            "./sk-sk.lproj/strings.json": 55,
            "./sv-se.lproj/strings.json": 56,
            "./th-th.lproj/strings.json": 57,
            "./tr-tr.lproj/strings.json": 58,
            "./uk-ua.lproj/strings.json": 59,
            "./vi-vi.lproj/strings.json": 60,
            "./vi-vn.lproj/strings.json": 61,
            "./zh-cn.lproj/strings.json": 62,
            "./zh-tw.lproj/strings.json": 63
        };
        i.keys = function() {
            return Object.keys(a)
        }, i.resolve = n, e.exports = i, i.id = 21
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ØªÙƒØ±Ø§Ø± Ø­Ù„Ù‚ÙŠ",
            "VideoEffects.Badge": "Ø´Ø§Ø±Ø©",
            "VideoEffects.Badge.Title.Bounce": "Ø§Ø±ØªØ¯Ø§Ø¯",
            "VideoEffects.Badge.Title.LongExposure": "ØªØ¹Ø±Ø¶ Ø·ÙˆÙŠÙ„ Ù„Ù„Ø¶ÙˆØ¡"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Bucle",
            "VideoEffects.Badge": "Etiqueta",
            "VideoEffects.Badge.Title.Bounce": "Rebot",
            "VideoEffects.Badge.Title.LongExposure": "Llarga exposiciÃ³"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "SmyÄka",
            "VideoEffects.Badge": "Odznak",
            "VideoEffects.Badge.Title.Bounce": "OdrÃ¡Å¾enÃ­",
            "VideoEffects.Badge.Title.LongExposure": "DlouhÃ¡ expozice"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "SlÃ¸jfe",
            "VideoEffects.Badge": "MÃ¦rke",
            "VideoEffects.Badge.Title.Bounce": "Returner",
            "VideoEffects.Badge.Title.LongExposure": "Lang eksponering"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Endlosschleife",
            "VideoEffects.Badge": "Name",
            "VideoEffects.Badge.Title.Bounce": "HÃ¼pfen",
            "VideoEffects.Badge.Title.LongExposure": "Langzeitbelichtung"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Î•Ï€Î±Î½Î¬Î»Î·ÏˆÎ·",
            "VideoEffects.Badge": "Î¤Î±Î¼Ï€Î­Î»Î±",
            "VideoEffects.Badge.Title.Bounce": "Î‘Î½Î±Ï€Î®Î´Î·ÏƒÎ·",
            "VideoEffects.Badge.Title.LongExposure": "ÎœÎ±ÎºÏÎ¬ Î­ÎºÎ¸ÎµÏƒÎ·"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Bounce": "Bounce",
            "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Bounce": "Bounce",
            "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Bounce": "Long Exposure",
            "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Bounce": "Bounce",
            "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge.Title.Bounce": "Bounce",
            "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Bucle",
            "VideoEffects.Badge": "Indicador",
            "VideoEffects.Badge.Title.Bounce": "Rebote",
            "VideoEffects.Badge.Title.LongExposure": "Larga exposiciÃ³n"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Indicador",
            "VideoEffects.Badge.Title.Bounce": "Rebote",
            "VideoEffects.Badge.Title.LongExposure": "ExposiciÃ³n prolongada"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Silmukka",
            "VideoEffects.Badge": "Merkki",
            "VideoEffects.Badge.Title.Bounce": "Edestakaisin",
            "VideoEffects.Badge.Title.LongExposure": "PitkÃ¤ valotus"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Boucle",
            "VideoEffects.Badge": "Pastille",
            "VideoEffects.Badge.Title.Bounce": "Rebond",
            "VideoEffects.Badge.Title.LongExposure": "Longue exposition"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Boucle",
            "VideoEffects.Badge": "Pictogramme",
            "VideoEffects.Badge.Title.Bounce": "Rebond",
            "VideoEffects.Badge.Title.LongExposure": "Pose longue"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "à¤²à¥‚à¤ª",
            "VideoEffects.Badge": "à¤¬à¥ˆà¤œ",
            "VideoEffects.Badge.Title.Bounce": "à¤¬à¤¾à¤‰à¤‚à¤¸",
            "VideoEffects.Badge.Title.LongExposure": "à¤²à¤‚à¤¬à¤¾ à¤à¤•à¥à¤¸à¤ªà¥‹à¤œà¤¼à¤°"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Petlja",
            "VideoEffects.Badge": "BedÅ¾",
            "VideoEffects.Badge.Title.Bounce": "Zrcalna petlja",
            "VideoEffects.Badge.Title.LongExposure": "Duga eksp."
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "JelvÃ©ny",
            "VideoEffects.Badge.Title.Bounce": "Oda-vissza",
            "VideoEffects.Badge.Title.LongExposure": "HosszÃº expozÃ­ciÃ³"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Tanda",
            "VideoEffects.Badge.Title.Bounce": "Memantul",
            "VideoEffects.Badge.Title.LongExposure": "Pencahayaan Lama"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Identificativo",
            "VideoEffects.Badge.Title.Bounce": "Rimbalzo",
            "VideoEffects.Badge.Title.LongExposure": "Esposizione lunga"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "×œ×•×œ××”",
            "VideoEffects.Badge": "×ª×’×™×ª",
            "VideoEffects.Badge.Title.Bounce": "×”×§×¤×¥",
            "VideoEffects.Badge.Title.LongExposure": "×—×©×™×¤×” ××¨×•×›×”"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ãƒ«ãƒ¼ãƒ—",
            "VideoEffects.Badge": "ãƒãƒƒã‚¸",
            "VideoEffects.Badge.Title.Bounce": "ãƒã‚¦ãƒ³ã‚¹",
            "VideoEffects.Badge.Title.LongExposure": "é•·æ™‚é–“éœ²å…‰"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ë£¨í”„",
            "VideoEffects.Badge": "ë°°ì§€",
            "VideoEffects.Badge.Title.Bounce": "ë°”ìš´ìŠ¤",
            "VideoEffects.Badge.Title.LongExposure": "ìž¥ë…¸ì¶œ"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Gelung",
            "VideoEffects.Badge": "Lencana",
            "VideoEffects.Badge.Title.Bounce": "Lantun",
            "VideoEffects.Badge.Title.LongExposure": "Pendedahan"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Gjenta",
            "VideoEffects.Badge": "Merke",
            "VideoEffects.Badge.Title.Bounce": "Sprett",
            "VideoEffects.Badge.Title.LongExposure": "Lang lukkertid"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Herhaal",
            "VideoEffects.Badge": "Badge",
            "VideoEffects.Badge.Title.Bounce": "Stuiteren",
            "VideoEffects.Badge.Title.LongExposure": "Lange belichting"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Gjenta",
            "VideoEffects.Badge": "Merke",
            "VideoEffects.Badge.Title.Bounce": "Sprett",
            "VideoEffects.Badge.Title.LongExposure": "Lang lukkertid"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "W pÄ™tli",
            "VideoEffects.Badge": "Plakat",
            "VideoEffects.Badge.Title.Bounce": "Odbicia",
            "VideoEffects.Badge.Title.LongExposure": "DÅ‚uga eksp."
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loop",
            "VideoEffects.Badge": "Identificador",
            "VideoEffects.Badge.Title.Bounce": "Vai e Volta",
            "VideoEffects.Badge.Title.LongExposure": "Longa exposiÃ§Ã£o"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "RepetiÃ§Ã£o contÃ­nua",
            "VideoEffects.Badge": "Cartaz",
            "VideoEffects.Badge.Title.Bounce": "Pingueâ€‘pongue",
            "VideoEffects.Badge.Title.LongExposure": "Longa exposiÃ§Ã£o"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ÃŽn buclÄƒ",
            "VideoEffects.Badge": "InsignÄƒ",
            "VideoEffects.Badge.Title.Bounce": "RicoÈ™eu",
            "VideoEffects.Badge.Title.LongExposure": "Expunere lungÄƒ"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ÐŸÐµÑ‚Ð»Ñ",
            "VideoEffects.Badge": "Ð—Ð½Ð°Ñ‡Ð¾Ðº",
            "VideoEffects.Badge.Title.Bounce": "ÐœÐ°ÑÑ‚Ð½Ð¸Ðº",
            "VideoEffects.Badge.Title.LongExposure": "Ð”Ð»Ð¸Ð½Ð½Ð°Ñ Ð²Ñ‹Ð´ÐµÑ€Ð¶ÐºÐ°"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge": "Odznak",
            "VideoEffects.Badge.Title.Bounce": "OdrÃ¡Å¾anie",
            "VideoEffects.Badge.Title.LongExposure": "DlhÃ¡ expozÃ­cia"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Loopa",
            "VideoEffects.Badge": "Bricka",
            "VideoEffects.Badge.Title.Bounce": "Studsa",
            "VideoEffects.Badge.Title.LongExposure": "LÃ¥ng exponering"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "à¹€à¸¥à¹ˆà¸™à¸§à¸™",
            "VideoEffects.Badge": "à¸›à¹‰à¸²à¸¢à¸à¸³à¸à¸±à¸š",
            "VideoEffects.Badge.Title.Bounce": "à¹€à¸”à¹‰à¸‡",
            "VideoEffects.Badge.Title.LongExposure": "à¸à¸²à¸£à¹€à¸›à¸´à¸”à¸£à¸±à¸šà¹à¸ªà¸‡à¸™à¸²à¸™"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "DÃ¶ngÃ¼",
            "VideoEffects.Badge": "Ä°ÅŸaret",
            "VideoEffects.Badge.Title.Bounce": "PinPon",
            "VideoEffects.Badge.Title.LongExposure": "Uzun Pozlama"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "ÐŸÐµÑ‚Ð»Ñ",
            "VideoEffects.Badge": "Ð—Ð½Ð°Ñ‡Ð¾Ðº",
            "VideoEffects.Badge.Title.Bounce": "Ð’Ñ–Ð´Ñ€ÑƒÑ…",
            "VideoEffects.Badge.Title.LongExposure": "Ð¢Ñ€Ð¸Ð²Ð°Ð»Ð° ÐµÐºÑÐ¿Ð¾Ð·Ð¸Ñ†Ñ–Ñ"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Láº·p láº¡i",
            "VideoEffects.Badge": "Biá»ƒu trÆ°ng",
            "VideoEffects.Badge.Title.Bounce": "Náº£y lÃªn",
            "VideoEffects.Badge.Title.LongExposure": "PhÆ¡i sÃ¡ng lÃ¢u"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "Láº·p láº¡i",
            "VideoEffects.Badge": "Biá»ƒu trÆ°ng",
            "VideoEffects.Badge.Title.Bounce": "Náº£y lÃªn",
            "VideoEffects.Badge.Title.LongExposure": "PhÆ¡i sÃ¡ng lÃ¢u"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "å¾ªçŽ¯æ’­æ”¾",
            "VideoEffects.Badge": "æ ‡è®°",
            "VideoEffects.Badge.Title.Bounce": "æ¥å›žæ’­æ”¾",
            "VideoEffects.Badge.Title.LongExposure": "é•¿æ›å…‰"
        }
    }, function(e, t) {
        e.exports = {
            "VideoEffects.Badge.Title.Loop": "å¾ªç’°æ’­æ”¾",
            "VideoEffects.Badge": "æ¨™è¨˜",
            "VideoEffects.Badge.Title.Bounce": "ä¾†å›žæ’­æ”¾",
            "VideoEffects.Badge.Title.LongExposure": "é•·æ™‚é–“æ›å…‰"
        }
    }, function(e, t, r) {
        "use strict";
        t.a = "1905ProjectDev35"
    }, function(e, t, r) {
        "use strict";
        t.a = "1905BDev29"
    }, function(e, t, r) {
        "use strict";
        var i = r(71),
            n = r(75),
            a = r(77),
            o = r(80),
            s = r(78),
            d = r(4),
            l = r(0),
            c = r(8),
            u = r(5),
            h = r(1);
        a.a.register(), o.a.register(), s.a.register();
        var p = c.a.extend({
            approach: "",
            autoplay: !0,
            caption: "",
            _hasInitialized: !1,
            _lastRecipe: null,
            recipe: l.a.observableProperty({
                get: function() {
                    var e = d.a.getRecipeFromPlaybackStyle(this.playbackStyle);
                    return this._setRecipe(e), e
                },
                set: function(e) {
                    this._setRecipe(e)
                }
            }),
            _setRecipe: function(e) {
                e && e !== this._lastRecipe && (this._lastRecipe = e, this.setUpRenderLayers())
            },
            requestMoreCompatibleRecipe: function() {
                this.recipe = this.recipe.requestMoreCompatibleRecipe()
            },
            duration: l.a.observableProperty({
                dependencies: ["recipe", "provider.videoDuration", "provider.photoTime"],
                get: function(e) {
                    var t = this.recipe,
                        r = this.provider,
                        i = r.photoTime,
                        n = r.videoDuration;
                    return t ? t.calculateAnimationDuration(e, n, i) : 0
                }
            }),
            displayWidth: 0,
            displayHeight: 0,
            get backingWidth() {
                return Math.round(this.displayWidth * devicePixelRatio)
            },
            get backingHeight() {
                return Math.round(this.displayHeight * devicePixelRatio)
            },
            get renderLayerWidth() {
                return this.displayWidth
            },
            get renderLayerHeight() {
                return this.displayHeight
            },
            get videoWidth() {
                return this.videoDecoder.videoWidth
            },
            get videoHeight() {
                return this.videoDecoder.videoHeight
            },
            photoWidth: l.a.proxyProperty("photo.width"),
            photoHeight: l.a.proxyProperty("photo.height"),
            photo: l.a.proxyProperty("provider.photo"),
            video: l.a.proxyProperty("provider.video"),
            photoTime: l.a.proxyProperty("provider.photoTime"),
            frameTimes: l.a.proxyProperty("provider.frameTimes"),
            effectType: l.a.proxyProperty("provider.effectType"),
            preloadedEffectType: l.a.proxyProperty("provider.preloadedEffectType"),
            playbackStyle: l.a.proxyProperty("provider.playbackStyle"),
            currentTime: l.a.observableProperty({
                defaultValue: 0,
                dependencies: ["duration"],
                get: function(e) {
                    return Math.min(this.duration || 0, Math.max(0, e || 0))
                },
                didChange: function(e) {
                    this.prepareToRenderAtTime(e)
                }
            }),
            canRenderCurrentTime: l.a.observableProperty({
                readOnly: !0,
                dependencies: ["currentTime"],
                get: function() {
                    return this.canRenderAtTime(this.currentTime)
                }
            }),
            _currentTimeRenderObserver: l.a.observer("currentTime", "canRenderCurrentTime", function(e, t) {
                t && (this.renderedTime = e)
            }),
            renderedTime: l.a.observableProperty({
                defaultValue: 0,
                didChange: function(e) {
                    this.renderAtTime(e), this.currentTime = e
                }
            }),
            areAllRenderLayersPrepared: l.a.observableProperty({
                defaultValue: !1
            }),
            isFullyPreparedForPlayback: l.a.observableProperty({
                readOnly: !0,
                dependencies: ["video", "areAllRenderLayersPrepared", "photoTime", "frameTimes", "playbackStyle"],
                get: function() {
                    return Boolean(this.video && this.areAllRenderLayersPrepared && (this.photoTime || this.playbackStyle !== h.a.HINT) && Array.isArray(this.frameTimes))
                }
            }),
            cannotRenderDueToMissingPhotoTimeOrFrameTimes: l.a.observableProperty({
                readOnly: !0,
                dependencies: ["video", "areAllRenderLayersPrepared", "photoTime", "frameTimes", "playbackStyle"],
                get: function() {
                    return Boolean(this.video && this.areAllRenderLayersPrepared && (!this.photoTime && this.playbackStyle === h.a.HINT || !Array.isArray(this.frameTimes)))
                }
            }),
            renderLayers: l.a.property(function() {
                return []
            }),
            videoDecoder: l.a.observableProperty(function() {
                return this._videoDecoderClass.create({
                    owner: this
                })
            }),
            _videoDecoderClass: i.a.extend({
                owner: l.a.observableProperty(),
                provider: l.a.proxyProperty("owner.provider")
            }),
            provider: l.a.observableProperty(function() {
                return n.a.create()
            }),
            init: function() {
                this._super(), this.element.className = ((this.element.className || "") + " lpk-live-photo-renderer").trim(), this.element.style.position = "absolute", this.element.style.overflow = "hidden", this.element.style.textAlign = "left"
            },
            updateSize: function(e, t) {
                if (!arguments.length)
                    return void (this.displayWidth && this.displayHeight && this.updateSize(this.displayWidth, this.displayHeight));
                this.displayWidth = e = Math.round(e), this.displayHeight = t = Math.round(t), this.element.style.width = e + "px", this.element.style.height = t + "px";
                for (var r, i = 0; r = this.renderLayers[i]; i++)
                    r.updateSize(this.renderLayerWidth, this.renderLayerHeight)
            },
            _imageOrVideoDidEnterOrLeave: l.a.observer("videoDecoder.canProvideFrames", "photo", function() {
                this.prepareToRenderAtTime(this.currentTime)
            }),
            prepareToRenderAtTime: l.a.boundFunction(function(e) {
                this.propertyChanged("canRenderCurrentTime");
                for (var t, r = !0, i = 0; t = this.renderLayers[i]; i++)
                    r = t.prepareToRenderAtTime(e) && r;
                this.areAllRenderLayersPrepared = r
            }),
            canRenderAtTime: function(e) {
                if (0 === e)
                    return !0;
                if (!this.duration && e)
                    return !1;
                for (var t, r = !0, i = "", n = 0; t = this.renderLayers[n]; n++)
                    t.canRenderAtTime(e) || (r = !1, i += (i ? ", " : "Cannot render; waiting for ") + t.layerName);
                return i && u.a.log(i + "."), r
            },
            renderAtTime: function(e) {
                if (this.duration)
                    for (var t, r = 0; t = this.renderLayers[r]; r++)
                        t.renderAtTime(e)
            },
            getNewRenderLayers: function() {
                return this.recipe.getRenderLayers(this)
            },
            setUpRenderLayers: function() {
                var e = this.renderLayers;
                e && this._cleanUpRenderLayers(e), this.renderLayers = this.getNewRenderLayers(), this.updateSize(), this.currentTime = 0, this.prepareToRenderAtTime(0)
            },
            _cleanUpRenderLayers: function(e) {
                for (var t, r = 0; t = e[r]; r++)
                    t.dispose(), t.tearDownFromRender()
            },
            reduceMemoryFootprint: function() {
                for (var e, t = 0; e = this.renderLayers[t]; t++)
                    e.reduceMemoryFootprint()
            },
            _clearRetainedFramesWhenNecessary: l.a.observer("provider.videoRotation", "provider.frameTimes", function() {
                this.reduceMemoryFootprint(), this.prepareToRenderAtTime(this.currentTime)
            })
        });
        t.a = p
    }, function(e, t, r) {
        "use strict";
        var i = r(66),
            n = i.a.extend({
                approach: "dom"
            });
        t.a = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(14),
            n = r(9),
            a = r(10),
            o = r(11);
        r.d(t, "augmentElementAsPlayer", function() {
            return o.a
        }), r.d(t, "createPlayer", function() {
            return o.b
        }), r.d(t, "Player", function() {
            return o.c
        });
        var s = r(6);
        r.d(t, "Errors", function() {
            return s.a
        });
        var d = r(15);
        r.d(t, "LivePhotoBadge", function() {
            return d.a
        });
        var l = r(1);
        r.d(t, "PlaybackStyle", function() {
            return l.a
        }), r.d(t, "Localization", function() {
            return c
        }), r.d(t, "BUILD_NUMBER", function() {
            return u
        }), r.d(t, "MASTERING_NUMBER", function() {
            return h
        }), r.d(t, "VERSION", function() {
            return p
        }), r.d(t, "LIVEPHOTOSKIT_LOADED", function() {
            return f
        });
        var c = {
                get locale() {
                    return a.a.locale
                },
                set locale(e) {
                    a.a.locale = e
                }
            },
            u = i.a.BUILD_NUMBER,
            h = i.a.MASTERING_NUMBER,
            p = i.a.VERSION,
            f = i.a.LIVEPHOTOSKIT_LOADED,
            v = "undefined" != typeof window && "undefined" != typeof document;
        if (v) {
            var y = window.document;
            setTimeout(function() {
                return y.dispatchEvent(r.i(n.a)())
            });
            if (y.styleSheets && document.head) {
                for (var g = null, m = null, b = 0; b < y.styleSheets.length; ++b)
                    try {
                        var _ = y.styleSheets[b];
                        if (_.cssRules)
                            for (var P = 0; P < _.cssRules.length; ++P) {
                                var T = _.cssRules[P];
                                if (-1 !== T.cssText.indexOf(".lpk-live-photo-player")) {
                                    g = T;
                                    break
                                }
                            }
                        if (g) {
                            m = _;
                            break
                        }
                    } catch (e) {
                        if ("SecurityError" !== e.name && "Access is denied." !== e.message.substring(0, 17) && "Member not found." !== e.message.substring(0, 17))
                            throw e
                    }
                if (!m) {
                    var x = document.createElement("style");
                    x.type = "text/css", document.head.appendChild(x), m = x.sheet
                }
                var k = "user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;-webkit-touch-callout: none; -webkit-user-select: none;";
                m.addRule ? m.addRule(".lpk-live-photo-player", k) : m.insertRule && m.insertRule(".lpk-live-photo-player {" + k + "}", 0)
            }
        }
        if (v && document.querySelectorAll instanceof Function) {
            var S = function() {
                    L = !0, Array.prototype.forEach.call(document.querySelectorAll("[data-live-photo]"), function(e) {
                        return r.i(o.a)(e)
                    })
                },
                E = function() {
                    !L && O && w && S()
                },
                O = /interactive|complete|loaded/.test(document.readyState),
                w = !!window.LivePhotosKit,
                L = !1;
            O || document.addEventListener("DOMContentLoaded", function() {
                O = !0, E()
            }), w || document.addEventListener("livephotoskitloaded", function() {
                w = !0, E()
            }), E()
        }
    }, function(e, t, r) {
        "use strict";
        var i = r(8),
            n = r(18),
            a = r(15);
        r.d(t, "a", function() {
            return o
        });
        var o = i.a.extend({
            badgeView: null,
            init: function() {
                var e = this;
                this._super(), this._createBadgeView(), n.b(function() {
                    return e.badgeView.redraw()
                })
            },
            _createBadgeView: function() {
                this.badgeView = new a.a, this.element.appendChild(this.badgeView.element);
                var e = this.badgeView.element.style;
                e.top = "10px", e.left = "10px", e.position = "absolute", e.zIndex = 4
            },
            updateToRendererLayout: function(e, t, r, i) {
                var n = this.badgeView,
                    a = n.element.style;
                a.left = e + 10 + "px", a.top = t + 10 + "px", a.right = ""
            },
            redraw: function() {
                this.badgeView.redraw()
            }
        })
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        function n(e) {
            if (!e)
                return !1;
            try {
                e.appendChild(f), e.removeChild(f)
            } catch (e) {
                return !1
            }
            return !0
        }
        var a = r(8),
            o = r(67),
            s = r(69),
            d = r(97),
            l = r(0),
            c = r(9),
            u = r(96),
            h = r(1),
            p = a.a.extend({
                staticMembers: {
                    activeInstance: l.a.observableProperty(null)
                },
                renderer: l.a.observableProperty(function() {
                    return o.a.create()
                }),
                showsNativeControls: l.a.observableProperty(!0),
                isPlaying: l.a.observableProperty(!1),
                wantsToPlay: l.a.observableProperty({
                    defaultValue: !1,
                    didChange: function(e) {
                        e && (this.constructor.activeInstance = this)
                    }
                }),
                canPlay: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["isPlaying", "renderer.isFullyPreparedForPlayback"],
                    get: function() {
                        return this.isPlaying || this.renderer.isFullyPreparedForPlayback
                    },
                    didChange: function(e) {
                        e && (this._hasHadCanPlay = !0, this.dispatchEvent(r.i(c.b)()), this.wantsToPlay && this.play())
                    }
                }),
                _generateErrorIfPlayedWithoutNecessaryMetadata: l.a.observer("renderer.cannotRenderDueToMissingPhotoTimeOrFrameTimes", "wantsToPlay", function(e) {
                    e && this.wantsToPlay && (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = new Error("The `photoTime` and/or `frameTimes` values are missing. Provide them directly (or via `metadataVideoSrc`) if they cannot be parsed from the video.")), e || (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = null)
                }),
                _cannotRenderDueToMissingPhotoTimeOrFrameTimesError: l.a.observableProperty(),
                _playerErrors: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["_cannotRenderDueToMissingPhotoTimeOrFrameTimesError"],
                    get: function() {
                        var e = this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError;
                        return e ? [e] : null
                    }
                }),
                _captionChanged: l.a.observer("caption", function(e) {
                    var t = "";
                    e && (t = ": " + e), this.element.setAttribute("aria-label", "Live Photo" + t)
                }),
                _effectTypeChanged: l.a.observer("effectType", function(e) {
                    this.badgeView && e && this.updateBadgeText()
                }),
                errors: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["provider.errors", "_playerErrors"],
                    get: function() {
                        var e = this.provider.errors,
                            t = this._playerErrors,
                            r = [];
                        return e && e.length && r.push.apply(r, i(e)), t && t.length && r.push.apply(r, i(t)), r
                    }
                }),
                lastError: l.a.observableProperty({
                    dependencies: ["provider.lastError"],
                    get: function(e) {
                        return e || this.provider.lastError || null
                    },
                    didChange: function(e) {
                        e && (this.throwError(e), this.stop())
                    }
                }),
                playbackRate: l.a.proxyProperty("renderer.videoDecoder.playbackRate"),
                currentTime: l.a.proxyProperty("renderer.currentTime"),
                renderedTime: l.a.proxyProperty("renderer.renderedTime"),
                duration: l.a.proxyProperty("renderer.duration"),
                videoWidth: l.a.proxyProperty("renderer.videoWidth"),
                videoHeight: l.a.proxyProperty("renderer.videoHeight"),
                photoWidth: l.a.proxyProperty("renderer.photoWidth"),
                photoHeight: l.a.proxyProperty("renderer.photoHeight"),
                recipe: l.a.proxyProperty("renderer.recipe"),
                requiresInterpolation: l.a.proxyProperty("renderer.recipe.requiresInterpolation"),
                effectType: l.a.proxyProperty("provider.effectType"),
                preloadedEffectType: l.a.proxyProperty("renderer.preloadedEffectType"),
                playbackStyle: l.a.proxyProperty("renderer.playbackStyle"),
                provider: l.a.proxyProperty("renderer.provider"),
                proactivelyLoadsVideo: l.a.proxyProperty("provider.proactivelyLoadsVideo"),
                metadataVideoSrc: l.a.proxyProperty("provider.metadataVideoSrc"),
                photoMimeType: l.a.proxyProperty("provider.photoMimeType"),
                photoSrc: l.a.proxyProperty("provider.photoSrc"),
                photo: l.a.proxyProperty("provider.photo"),
                videoMimeType: l.a.proxyProperty("provider.videoMimeType"),
                videoSrc: l.a.proxyProperty("provider.videoSrc"),
                video: l.a.proxyProperty("provider.video"),
                photoTime: l.a.proxyProperty("provider.photoTime"),
                frameTimes: l.a.proxyProperty("provider.frameTimes"),
                videoRotation: l.a.proxyProperty("provider.videoRotation"),
                loadProgress: l.a.proxyProperty("provider.progress"),
                autoplay: l.a.proxyProperty("renderer.autoplay"),
                caption: l.a.proxyProperty("renderer.caption"),
                _isZeroSizeWarningLogged: l.a.observableProperty(!1),
                _renderWhenPossible: l.a.observer("renderer.video", "renderer.photo", function() {
                    if (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = null, this.updateSize(!0), !this._isZeroSizeWarningLogged) {
                        var e = this.element.getBoundingClientRect();
                        0 !== e.width && 0 !== e.height || (console.warn("The LivePhotosKit Player located at position (" + e.left + ", " + e.top + ") in the viewport has either a zero width or zero height (or both) and will not render. To fix this, ensure that the Player has a style that will yield a non-zero width and height."), this._isZeroSizeWarningLogged = !0)
                    }
                }),
                attachBadgeView: function(e) {
                    var t = this;
                    this.badgeView = e, this.updateBadgeText(), e.configurePlayAction(function() {
                        return t.play()
                    }), e.configureStopAction(function() {
                        return t.beginFinishingPlaybackEarly()
                    })
                },
                updateBadgeText: function() {
                    this.badgeView.updateBadgeText(this.effectType)
                },
                nativeControls: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["showsNativeControls"],
                    get: function() {
                        var e = this;
                        return this.showsNativeControls ? this._nativeControls_cachedValue || (this._nativeControls_cachedValue = s.a.extend({
                            owner: l.a.observableProperty(this),
                            _slurpProgress: l.a.observer("owner.provider.progress", function(e) {
                                this.badgeView && (this.badgeView.progress = e)
                            }),
                            _slurpError: l.a.observer("owner.errors", function(e) {
                                this.badgeView && (this.badgeView.shouldShowError = !!e && e.length > 0)
                            }),
                            init: function() {
                                this._super.apply(this, arguments), e.attachBadgeView(this.badgeView)
                            }
                        }).create()) : null
                    },
                    didChange: function(e) {
                        this._nativeControls_previousValue && this._nativeControls_previousValue.detach(), this._nativeControls_previousValue = e, e && e.attachInto(this)
                    }
                }),
                init: function(e, t) {
                    var i = this;
                    if (e && !n(e))
                        throw "Any pre-existing element provided for use as a LivePhotosKit.Player must be able to append child DOM nodes.";
                    e && e.childNodes.length && (e.innerHTML = "");
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (this[a] = t[a]);
                    this._super(e);
                    switch (this.element.className.indexOf("lpk-live-photo-player") < 0 && (this.element.className = this.element.className + " lpk-live-photo-player"), this.element.setAttribute("role", "image"), r.i(u.a)(this.element, "position") || this.element.style.position) {
                    case "absolute":
                    case "fixed":
                    case "relative":
                        break;
                    default:
                        this.element.style.position = "relative"
                    }
                    switch (r.i(u.a)(this.element, "display") || this.element.style.display) {
                    case "block":
                    case "inline-block":
                    case "table":
                    case "table-caption":
                    case "table-column-group":
                    case "table-header-group":
                    case "table-footer-group":
                    case "table-row-group":
                    case "table-cell":
                    case "table-column":
                    case "table-row":
                        break;
                    default:
                        this.element.style.display = "inline-block"
                    }
                    this.renderer.attachInto(this), this.renderer.eventDispatchingElement = this.element, window.addEventListener("resize", this.updateSize), "ontouchstart" in document.documentElement && (this.addEventListener("touchstart", function() {
                        return i.play()
                    }, !1), this.addEventListener("touchend", function() {
                        return i.beginFinishingPlaybackEarly()
                    }, !1))
                },
                play: function() {
                    if (!this.isPlaying) {
                        var e = this.provider;
                        e.video || (e.needsLoadedVideoForPlayback = !0), this.wantsToPlay = !0, this.canPlay && (this.isPlaying = !0, this._lastFrameNow = Date.now(), this._nextFrame())
                    }
                    return this.isPlaying
                },
                pause: function() {
                    this.isPlaying = !1, this.wantsToPlay = !1, this._cancelNextFrame()
                },
                stop: function() {
                    this.pause(), this.currentTime = 0, this.renderer.duration = NaN
                },
                toggle: function() {
                    this.wantsToPlay ? this.pause() : this.play()
                },
                beginFinishingPlaybackEarly: function() {
                    this.recipe.beginFinishingPlaybackEarly(this)
                },
                _stopWhenAnotherPlayerStarts: l.a.observer("_constructor.activeInstance", function(e) {
                    e && e !== this && (this.stop(), this.renderer.reduceMemoryFootprint())
                }),
                _constructor: l.a.observableProperty(function() {
                    return p
                }),
                _stopPlaybackWhenItemsLoadOrUnload: l.a.observer("video", "photo", function() {
                    !this.isPlaying || this.playbackStyle === h.a.LOOP && this.autoplay || this.stop()
                }),
                addEventListener: function(e, t, r) {
                    var i = this.element;
                    i.addEventListener.call(i, e, t, r)
                },
                removeEventListener: function(e, t, r) {
                    var i = this.element;
                    i.removeEventListener.call(i, e, t, r)
                },
                _nextFrame: function() {
                    var e = Date.now(),
                        t = (e - this._lastFrameNow) * this.playbackRate;
                    this._lastFrameNow = e, this.currentTime === this.renderedTime && (this.currentTime += t / 1e3), this.recipe && this.recipe.continuePlayback(this)
                },
                _cancelNextFrame: function() {
                    cancelAnimationFrame(this._rafID)
                },
                updateSize: l.a.boundFunction(function(e, t) {
                    if (this.photoWidth && this.photoHeight) {
                        var i = !0 === e ? void 0 : e,
                            n = !0 === e ? e : void 0;
                        if (isNaN(i) || isNaN(t) ? (i = this.element.offsetWidth, t = this.element.offsetHeight) : (i = Math.round(i), t = Math.round(t), this.element.style.width = i + "px", this.element.style.height = t + "px"), i && t) {
                            if (!(this._lastUpdateChangeToken !== (this._lastUpdateChangeToken = i + ":" + t)) && !n)
                                return !1;
                            var a = r.i(d.a)(this.photoWidth, this.photoHeight, i, t),
                                o = Math.ceil(a.height),
                                s = Math.ceil(a.width),
                                l = Math.floor(i / 2 - s / 2),
                                c = Math.round(t / 2 - o / 2),
                                u = this.renderer;
                            u.element.style.top = c + "px", u.element.style.left = l + "px", u.updateSize(s, o), this.displayWidth = i, this.displayHeight = t, this.nativeControls && this.nativeControls.updateToRendererLayout(l, c, s, o)
                        }
                    }
                }),
                _dispatchPhotoLoadEventOnNewPhoto: l.a.observer("photo", function(e) {
                    e && this.dispatchEvent(r.i(c.c)())
                }),
                _dispatchVideoLoadEventOnNewVideo: l.a.observer("video", function(e) {
                    e && this.dispatchEvent(r.i(c.d)())
                }),
                throwError: function(e) {
                    this.dispatchEvent(r.i(c.e)({
                        error: e,
                        errorCode: e.errCode
                    }))
                }
            }),
            f = document.createElement("div");
        t.a = p
    }, function(e, t, r) {
        "use strict";
        function i() {
            f = !1
        }
        function n() {}
        function a(e, t) {
            return -(e.importance - t.importance) || e.number - t.number
        }
        function o(e, t) {
            for (var r = 0, i = e.length, n = 0; n < i - r; n++)
                if (e[n] === t && (r++, n--), r) {
                    var a = n + 1;
                    e[a] = e[a + r]
                }
            return e.length -= r, e
        }
        var s = r(95),
            d = r(72),
            l = r(0),
            c = r(17),
            u = r(2),
            h = -1 !== location.href.indexOf("_lpk_play_to_decode=true") || -1 === location.href.indexOf("_lpk_play_to_decode=false") && (!u.a.isSafari && !u.a.isIOS),
            p = -1 !== location.href.indexOf("_lpk_persistent_frames=true") || (location.href.indexOf("_lpk_persistent_frames=false"), !1),
            f = !0,
            v = l.a.Object.extend({
                id: l.a.property(function() {
                    return r.i(s.a)()
                }),
                provider: l.a.observableProperty(),
                video: l.a.proxyProperty("provider.video"),
                duration: l.a.proxyProperty("provider.videoDuration"),
                videoRotation: l.a.proxyProperty("provider.videoRotation"),
                frameTimes: l.a.proxyProperty("provider.frameTimes"),
                requiresInterpolation: l.a.proxyProperty("renderer.recipe.requiresInterpolation"),
                get frameCount() {
                    var e = this.frameTimes;
                    return e ? e.length : 0
                },
                shouldPrepareToSeek: !1,
                canProvideFrames: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["video"],
                    get: function() {
                        return !!this.video
                    }
                }),
                videoWidth: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["video", "videoRotation"],
                    get: function() {
                        var e = this.video;
                        if (e)
                            return this.videoRotation % 180 == 0 ? e.videoWidth : e.videoHeight
                    }
                }),
                videoHeight: l.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["video", "videoRotation"],
                    get: function() {
                        var e = this.video;
                        if (e)
                            return this.videoRotation % 180 == 0 ? e.videoHeight : e.videoWidth
                    }
                }),
                playbackRate: l.a.observableProperty(1),
                _sendPlaybackRateToVideo: l.a.observer("playbackRate", "video", function(e, t) {
                    t && (t.playbackRate = e)
                }),
                _pendingFrames: l.a.property(function() {
                    return []
                }),
                init: function() {
                    this._largeCanvas = document.createElement("canvas"), this._largeContext = this._largeCanvas.getContext("2d"), this._super.apply(this, arguments)
                },
                _handleVideoChange: l.a.observer("video", function() {
                    var e = this.video,
                        t = this._lastVideo;
                    if (this._lastVideo = e, e !== t && (t && this.cleanUpOldVideo(t), e && this.setUpNewVideo(e), e && p))
                        for (var r = c.a ? 1 : 0; this.frameTimes && r < this.frameTimes.length; r++)
                            this.getFrame(r).retain()
                }),
                setUpNewVideo: function(e) {
                    e.addEventListener("seeked", this._seeked), e.muted = !0
                },
                cleanUpOldVideo: function(e) {
                    e.removeEventListener("seeked", this._seeked), e.playbackRate = 1, e.muted = !1, e.pause(), this._stopSeekingEntirely()
                },
                fractionalIndexForTime: function(e) {
                    if (e = Math.min(this.duration, Math.max(0, e)), isNaN(e))
                        return e;
                    var t = this.frameTimes,
                        r = t.length,
                        i = void 0;
                    for (i = 0; i < r && t[i] < e; i++)
                        ;
                    i && i--;
                    var n = t[i],
                        a = t[i + 1];
                    return a ? i + Math.min(1, (e - n) / (a - n)) : i
                },
                timeForFractionalIndex: function(e) {
                    if (e <= 0)
                        return 0;
                    if (e >= this.frameTimes.length)
                        return this.duration;
                    var t = 0 | e,
                        r = Math.ceil(e);
                    if (t === r)
                        return this.frameTimes[t];
                    var i = this.frameTimes[t],
                        n = r < this.frameTimes.length ? this.frameTimes[r] : this.duration;
                    return n ? i + (e - t) * (n - i) : i
                },
                getFrame: function(e, t) {
                    if (!this.frameTimes)
                        throw "Attempted to get frame before ready.";
                    if (isNaN(this.frameTimes[e]))
                        throw "Frame number " + e + " is is not a frame in the video.";
                    var r = d.a.getCached(this, e);
                    return isNaN(t) || (r.importance = Math.max(r.importance, t)), r.readyState || (this._pendingFrames.push(r), this._pendingFrames.sort(a), r.didPend(), this._isSeeking || this._scheduleArtificialSeek()), r
                },
                peekFrame: function(e) {
                    var t = d.a.peekCached(this, e);
                    return t && 2 === t.readyState && !t.lacksOwnPixelData ? t : null
                },
                getNearestDecodedFrame: function(e) {
                    for (var t = Math.max(e, this.frameTimes.length - 1 - e), r = -1; ++r <= t;) {
                        var i = this.peekFrame(e + r) || this.peekFrame(e - r);
                        if (i)
                            return i
                    }
                    return null
                },
                _scheduleArtificialSeek: function() {
                    this._artificialSeekTimeout || (this._artificialSeekTimeout = setTimeout(this._seeked), this._artificialSeekRAFId = requestAnimationFrame(this._seeked))
                },
                _unscheduleArtificialSeek: function() {
                    this._artificialSeekTimeout && (clearTimeout(this._artificialSeekTimeout), this._artificialSeekTimeout = null, cancelAnimationFrame(this._artificialSeekRAFId), this._artificialSeekRAFId = null)
                },
                _stopSeekingEntirely: function() {
                    this._unscheduleArtificialSeek(), this._isPlaying = !1, this._isSeeking = !1, this._expectedNextSeenFrameNumber = NaN, this.video && this.video.pause()
                },
                _seeked: l.a.boundFunction(function(e) {
                    var t = this._pendingFrames;
                    if ((0 !== t.length || this.requiresInterpolation) && !(e instanceof Event && e.target !== this.video) && (e instanceof Event || this.video)) {
                        this._unscheduleArtificialSeek(), this._isSeeking = !1;
                        var r = this.fractionalIndexForTime(this.video.currentTime);
                        r |= 0;
                        for (var a, o = NaN, s = 0; a = t[s]; s++)
                            if (a.number === r) {
                                o = r, a.didDecode(), this._removePendingFrame(a);
                                break
                            }
                        var d = this._expectedNextSeenFrameNumber;
                        if (this._expectedNextSeenFrameNumber = NaN, d < o)
                            for (var l, c = 0; l = t[c]; c++)
                                l.number >= d && l.number < o && (l.didGetSkipped(), this._removePendingFrame(l), c--);
                        var u = t[0];
                        if (!u)
                            return this._isPlaying && this.requiresInterpolation && (this._isPlaying = !1, this.video.pause()), void (this._expectedNextSeenFrameNumber = NaN);
                        var p = u.number > r && u.number <= r + 2 && f;
                        if (h || (p = !1), p) {
                            if (!this._isPlaying) {
                                this._isPlaying = !0;
                                try {
                                    var v = this.video.play();
                                    v && v.then instanceof Function && v.then(n, i)
                                } catch (e) {
                                    f = !1
                                }
                            }
                            this._expectedNextSeenFrameNumber = u.number, this._scheduleArtificialSeek()
                        } else
                            this._isPlaying && (this._isPlaying = !1, this.video.pause()), this._expectedNextSeenFrameNumber = NaN, this.video.currentTime = u.time + 1e-4, this._isSeeking = !0
                    }
                }),
                _frameWillDispose: function(e) {
                    this._removePendingFrame(e)
                },
                _removePendingFrame: function(e) {
                    o(this._pendingFrames, e), this._pendingFrames.length || this._unscheduleArtificialSeek()
                }
            });
        t.a = v
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            e.container = document.createElement("div"), e.container.frame = e, e.container.innerHTML = '<div style="position:absolute; left:0; right:0; top:0; bottom:0; text-align:center; line-height:30px; color:white; text-shadow: black 0px 0px 4px,black 0px 0px 4px,black 0px 0px 4px,black 0px 0px 4px; font-family:HelveticaNeue-Light;"></div>', e.textBox = e.container.lastChild, e.container.insertBefore(e.image, e.textBox), e.image.style.position = "absolute", e.container.style.cssText = "position:relative; display:inline-block; border: 1px solid black;";
            var t = e._debug_aspect || (e._debug_aspect = e.videoDecoder && (e.videoDecoder.videoWidth > e.videoDecoder.videoHeight ? "landscape" : "portrait"));
            e.container.style.width = e.image.style.width = "landscape" === t ? "40px" : "30px", e.container.style.height = e.image.style.height = "landscape" === t ? "30px" : "40px", document.body.appendChild(e.container)
        }
        var n = r(12),
            a = r(91),
            o = r(5),
            s = r(0),
            d = r(89),
            l = r(2);
        r.d(t, "a", function() {
            return c
        });
        var c = s.a.Object.extend(d.a, a.a, {
                staticMembers: {
                    getPoolingCacheKey: function(e, t) {
                        return "f" + t + "_in_" + e.id
                    }
                },
                container: null,
                image: null,
                _context: null,
                number: -1,
                time: -1,
                importance: 0,
                videoDecoder: null,
                readyState: 0,
                _poolingCacheKey: null,
                _debugShowInDOM: n.a,
                lacksOwnPixelData: !1,
                _postDispose: function() {
                    this.image.width = this.image.height = 0
                },
                get backingFrame() {
                    return this.lacksOwnPixelData ? this.videoDecoder.getNearestDecodedFrame(this.number) || this : this
                },
                init: function() {
                    this._postDispose = this._postDispose.bind(this);
                    var e = this.image = document.createElement("canvas");
                    this._context = this.image.getContext("2d"), this._super(), this._debugShowInDOM ? i(this) : h && (h.appendChild(e), e.style.cssText = "position: absolute; top: 0px; width:1px; height: 1px; display: inline-block;", e.style.left = u++ + "px")
                },
                initFromPool: function(e, t) {
                    clearTimeout(this._postDisposalTimeout), this.videoDecoder = e, this.number = t, this.time = e.frameTimes[t], this._debugShowInDOM && (this.textBox.innerHTML = this.number)
                },
                dispose: function() {
                    this.resetReadiness(), this.videoDecoder._frameWillDispose(this), this.number = this.time = -1, this.importance = 0, this.videoDecoder = null, this.readyState = 0, this.lacksOwnPixelData = !1, this._postDisposalTimeout = setTimeout(this._postDispose, 3e3), this.constructor._disposeInstance(this), this._debugShowInDOM && (this.textBox.innerHTML = "x", this.textBox.style.color = "#FF0000", this._context.clearRect(0, 0, this.image.width, this.image.height))
                },
                didPend: function() {
                    this.readyState = 1, this._debugShowInDOM && (this.textBox.style.color = "#FF8800")
                },
                didDecode: function() {
                    this.obtainPixelData(), this.readyState = 2, this.resolveReadiness(this), this._debugShowInDOM && (this.textBox.style.color = "#00FF00")
                },
                obtainPixelData: function() {
                    var e = this.image,
                        t = this._context,
                        r = this.videoDecoder,
                        i = r.videoRotation,
                        n = r.videoWidth,
                        a = r.videoHeight,
                        o = i % 180 == 0 ? n : a,
                        s = i % 180 == 0 ? a : n;
                    e.width === n && e.height === a || (e.width = n, e.height = a), l.a.isFirefox && t.getImageData(0, 0, 1, 1);
                    for (var d = 0; d < i; d += 90)
                        t.translate(d % 180 ? a : n, 0), t.rotate(Math.PI / 2);
                    t.drawImage(r.video, 0, 0, o, s), t.setTransform(1, 0, 0, 1, 0, 0)
                },
                didGetSkipped: function() {
                    o.a.log("    Skipped decoding frame " + this.number + ". Using nearest frame instead."), this.lacksOwnPixelData = !0, this.readyState = 2, this.resolveReadiness(this), this._debugShowInDOM && (this._context.fillStyle = "red", this._context.fillRect(0, 0, this.image.width, this.image.height), this.textBox.style.color = "#00FF00")
                }
            }),
            u = 0,
            h = function() {
                if (!l.a.isIE && !l.a.isEdge)
                    return null;
                var e = document.createElement("div");
                return e.style.cssText = "top: 0px; left: 0px; width: 50px; height: 1px; overflow: hidden; position: absolute; z-index: 100000; opacity: 0.001; pointer-events: none;", document.body ? document.body.appendChild(e) : setTimeout(function() {
                    return document.body.appendChild(e)
                }, 0), e
            }()
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = i.a.Object.extend({
                state: i.a.observableProperty("unloaded"),
                validateResult: function(e) {
                    return !!e
                },
                loadSrc: function(e) {},
                abortCurrentLoad: function() {},
                isSrcLoadAllowed: i.a.observableProperty(!0),
                _loadSrcOnceAllowed: i.a.observer("isSrcLoadAllowed", function(e) {
                    if (e) {
                        if ("unloaded" === this.state) {
                            var t = this.src;
                            t && (this.state = "loading", this.loadSrc(t))
                        }
                    }
                }),
                src: i.a.observableProperty({
                    didChange: function(e) {
                        this._isWritingSrcDueToWritingOfResult || (this._isWritingResultDueToWritingOfSrc = !0, this.result = null, this._isWritingResultDueToWritingOfSrc = !1, this.abortCurrentLoad(), e && this.isSrcLoadAllowed ? (this.state = "loading", this.loadSrc(e)) : this.state = "unloaded")
                    }
                }),
                result: i.a.observableProperty({
                    decideRequiresUpdate: function() {
                        return !0
                    },
                    didChange: function(e) {
                        if (!this._isWritingResultDueToWritingOfSrc) {
                            var t = this.validateResult(e) ? "loaded" : e || this._isWritingResultDueToError ? "errored" : "unloaded";
                            this._isWritingResultDueToLoadOfSrc || this._isWritingResultDueToError || (this._isWritingSrcDueToWritingOfResult = !0, this.src = null, this._isWritingSrcDueToWritingOfResult = !1, this.abortCurrentLoad(), this.state = "unloaded"), this.state = t
                        }
                    }
                }),
                error: i.a.observableProperty(null),
                _clearErrorOnceNoLongerErrored: i.a.observer("state", function(e) {
                    "errored" !== e && (this.error = null)
                }),
                progress: i.a.observableProperty({
                    defaultValue: 0,
                    dependencies: ["state"],
                    get: function(e) {
                        return "loading" === this.state ? Math.min(1, Math.max(0, +e || 0)) : "loaded" === this.state ? 1 : 0
                    }
                }),
                _clearProgressOnceUnloaded: i.a.observer("state", function(e) {
                    "unloaded" === e && (this.progress = 0)
                }),
                loadDidFail: function(e) {
                    "loading" === this.state && (this._isWritingResultDueToError = !0, this.result = null, this._isWritingResultDueToError = !1, this.error = e)
                },
                loadDidSucceed: function(e) {
                    "loading" === this.state && (this._isWritingResultDueToLoadOfSrc = !0, this.result = e, this._isWritingResultDueToLoadOfSrc = !1, this.error = null)
                }
            });
        t.a = n
    }, function(e, t, r) {
        "use strict";
        function i(e, t, r) {
            var i = e.getContext("2d"),
                n = 7 === r || 8 === r ? 270 : 3 === r || 4 === r ? 180 : 5 === r || 6 === r ? 90 : 0,
                a = t.naturalWidth,
                o = t.naturalHeight,
                s = n % 180 == 0 ? a : o,
                d = n % 180 == 0 ? o : a,
                l = 2 === r || 4 === r ? -1 : 1,
                c = 5 === r || 7 === r ? -1 : 1;
            e.width === s && e.height === d || (e.width = s, e.height = d);
            for (var u = 0; u < n; u += 90)
                i.translate(u % 180 ? d : s, 0), i.rotate(Math.PI / 2);
            i.scale(l, c), i.translate((l - 1) / 2 * a, (c - 1) / 2 * o), i.drawImage(t, 0, 0), i.setTransform(1, 0, 0, 1, 0, 0)
        }
        var n = r(16),
            a = r(94),
            o = r(6),
            s = r(3),
            d = [],
            l = {},
            c = n.a.extend({
                mimeType: "image/jpeg",
                beginSecondaryLoad: function(e, t) {
                    var i = r.i(a.a)(e);
                    this._exifOrientationInLastLoadedBuffer = i.orientation || NaN, 3 === i.photosRenderEffect && (this.effectType = s.a.EXPOSURE), d[0] = e, l.type = t, this._internalImage.src = this._internalImageSrc = URL.createObjectURL(new Blob(d, l)), (window.photoBuffers || (window.photoBuffers = [])).push(e)
                },
                abortCurrentSecondaryLoad: function() {
                    this.__internalImage && this._internalImage.removeAttribute("src"), this._internalImageSrc && (URL.revokeObjectURL(this._internalImageSrc), this._internalImageSrc = null), this._exifOrientationInLastLoadedBuffer = null, this.effectType = null
                },
                get _internalImage() {
                    var e = this.__internalImage;
                    return e || (e = this.__internalImage = new Image, e.addEventListener("load", this._internalImageLoadDidSucceed.bind(this)), e.addEventListener("error", function(e) {
                        this.loadDidFail(e)
                    }.bind(this))), e
                },
                get _internalCanvas() {
                    return this.__internalCanvas || (this.__internalCanvas = document.createElement("canvas"))
                },
                loadDidFail: function(e) {
                    if (e)
                        return e.errCode = o.a.PHOTO_FAILED_TO_LOAD, this._super(e)
                },
                _internalImageLoadDidSucceed: function() {
                    var e = this._internalImage;
                    1 !== this._exifOrientationInLastLoadedBuffer && (i(this._internalCanvas, this._internalImage, this._exifOrientationInLastLoadedBuffer), e = this._internalCanvas), this.loadDidSucceed(e)
                }
            });
        t.a = c
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = r(76),
            a = r(74),
            o = r(3),
            s = r(1),
            d = i.a.Object.extend({
                videoSrc: i.a.proxyProperty("_videoProvider.src"),
                videoMimeType: i.a.proxyProperty("_videoProvider.mimeType"),
                video: i.a.proxyProperty("_videoProvider.result"),
                effectType: i.a.observableProperty({
                    dependencies: ["_photoProvider.effectType", "_videoProvider.effectType", "preloadedEffectType"],
                    get: function() {
                        return this._photoProvider.effectType || this._videoProvider.effectType || this.preloadedEffectType || o.a.default
                    },
                    didChange: function(e) {
                        this.setPlaybackStyle(e)
                    }
                }),
                preloadedEffectType: i.a.observableProperty({
                    get: function(e) {
                        return e
                    },
                    set: function(e) {
                        return this._photoProvider.effectType = null, this._videoProvider.effectType = null, e
                    }
                }),
                setPlaybackStyle: function(e) {
                    this.effectType = e, this.playbackStyle = o.a.toPlaybackStyle(e)
                },
                photoSrc: i.a.proxyProperty("_photoProvider.src"),
                photoMimeType: i.a.proxyProperty("_photoProvider.mimeType"),
                photo: i.a.proxyProperty("_photoProvider.result"),
                playbackStyle: i.a.observableProperty(s.a.default),
                metadataVideoSrc: i.a.proxyProperty("_metadataVideoProvider.src"),
                progress: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["_photoProvider.progress", "_videoProvider.state", "_videoProvider.progress", "_metadataVideoProvider.state", "_metadataVideoProvider.progress"],
                    get: function() {
                        var e = this._videoProvider,
                            t = this._metadataVideoProvider,
                            r = e.state,
                            i = t.state,
                            n = "unloaded" !== r || "unloaded" !== i ? .75 : 0,
                            a = n ? "unloaded" === i ? e.progress : (e.progress + t.progress) / 2 : 0;
                        return this._photoProvider.progress * (1 - n) + a * n
                    }
                }),
                photoTime: i.a.observableProperty({
                    dependencies: ["_metadataVideoProvider.photoTime", "_videoProvider.photoTime"],
                    get: function(e) {
                        return +e === e ? e : this._metadataVideoProvider.photoTime || this._videoProvider.photoTime || null
                    }
                }),
                videoRotation: i.a.observableProperty({
                    dependencies: ["_videoProvider.videoRotation"],
                    get: function(e) {
                        if (+e === e)
                            return e;
                        var t = this._videoProvider.videoRotation;
                        return +t === t ? t : null
                    },
                    set: function(e) {
                        return 90 * Math.round(e / 90) % 360 | 0
                    }
                }),
                frameTimes: i.a.observableProperty({
                    dependencies: ["_metadataVideoProvider.frameTimes", "_videoProvider.frameTimes"],
                    get: function(e) {
                        return e || (this._metadataVideoProvider.frameTimes || this._videoProvider.frameTimes)
                    },
                    set: function(e) {
                        if (!e)
                            return null;
                        if ("string" == typeof e) {
                            var t = i.a.arrayPool.get();
                            i.a.String.splitIntoArray(e, ",", t), i.a.Array.mapIntoArray(t, function(e) {
                                return Number(e.trim())
                            }, t), e = t
                        }
                        for (var r = Array.isArray(e), n = r && e.length >= 2, a = 0, o = e.length; a < o && n; a++) {
                            var s = e[a];
                            +s !== s && (n = !1)
                        }
                        if (!n)
                            throw new Error("If frameTimes is provided, it must be provided as an Array or comma-delimited string containing numbers.");
                        return e
                    }
                }),
                videoDuration: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["frameTimes"],
                    get: function() {
                        return this.frameTimes ? this.frameTimes[this.frameTimes.length - 1] : void 0
                    }
                }),
                proactivelyLoadsVideo: i.a.observableProperty(!1),
                needsLoadedVideoForPlayback: i.a.observableProperty(!1),
                _reset_needsLoadedVideoForPlayback_whenAppropriate: i.a.observer("video", function() {
                    this.needsLoadedVideoForPlayback = !1
                }),
                isVideoLoadAllowed: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["proactivelyLoadsVideo", "needsLoadedVideoForPlayback"],
                    get: function() {
                        return this.proactivelyLoadsVideo || this.needsLoadedVideoForPlayback
                    }
                }),
                errors: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["_videoProvider.error", "_photoProvider.error"],
                    get: function() {
                        return [this._photoProvider.error, this._videoProvider.error].filter(function(e) {
                            return !!e
                        })
                    }
                }),
                lastError: i.a.observableProperty(),
                _lastPhotoError: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["_photoProvider.error"],
                    get: function() {
                        return this._photoProvider.error
                    },
                    didChange: function(e) {
                        this.lastError = e
                    }
                }),
                _lastVideoError: i.a.observableProperty({
                    readOnly: !0,
                    dependencies: ["_videoProvider.error"],
                    get: function() {
                        return this._videoProvider.error
                    },
                    didChange: function(e) {
                        this.lastError = e
                    }
                }),
                _metadataVideoProvider: i.a.observableProperty(function() {
                    return n.a.extend({
                        requiresMimeTypeForRawArrayBufferSrc: !1,
                        actuallyProvidesResultingVideoFromSecondaryLoad: !1
                    }).create()
                }),
                _videoProvider: i.a.observableProperty(function() {
                    return n.a.extend({
                        owner: i.a.observableProperty(this),
                        isSrcLoadAllowed: i.a.proxyProperty("owner.isVideoLoadAllowed"),
                        exposedSrcKeyForErrorStrings: "videoSrc",
                        exposedMimeTypeKeyForErrorStrings: "videoMimeType"
                    }).create()
                }),
                _photoProvider: i.a.observableProperty(function() {
                    return a.a.extend({
                        exposedSrcKeyForErrorStrings: "photoSrc",
                        exposedMimeTypeKeyForErrorStrings: "photoMimeType"
                    }).create()
                })
            });
        t.a = d
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (e === t)
                return !0;
            if (!e || !t)
                return !1;
            var r = e.length;
            if (r !== t.length)
                return !1;
            for (var i = 0; i < r; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        }
        var n = r(16),
            a = r(88),
            o = r(0),
            s = r(5),
            d = r(6),
            l = r(2),
            c = r(3),
            u = [],
            h = {},
            p = n.a.extend({
                __internalVideo: null,
                _internalVideoSRC: null,
                photoTime: o.a.observableProperty(),
                playbackStyle: o.a.observableProperty(null),
                effectType: o.a.observableProperty(null),
                frameTimes: o.a.observableProperty(),
                videoRotation: o.a.observableProperty(),
                actuallyProvidesResultingVideoFromSecondaryLoad: !0,
                _clearMetadataPropertiesOnUnload: o.a.observer("state", function(e) {
                    "loaded" !== e && (this.photoTime = this.frameTimes = this.videoRotation = void 0)
                }),
                beginSecondaryLoad: function(e, t) {
                    this.preprocessAndAttemptToReadMetadataFromBuffer(e), this.actuallyProvidesResultingVideoFromSecondaryLoad && (u[0] = e, h.type = "video/quicktime" === t ? "video/mp4" : t, "application/octet-stream" === t && (s.a.warn('Encountered a Content-Type of "application/octet-stream" for the file obtained for `videoSrc`.Some browsers may be unable to use the video with this MIME type. If the video portion of the Player is not functioning, make sure the proper MIME type is being provided with the response,or provide the proper MIME type manually by assigning it to the `videoMimeType` property on the Player instance. For now, an attempt will be made to treat the videoâ€™s bytes as "video/mp4", but playback is not guaranteed unless either of these corrective steps are taken.'), t = "video/mp4"), this._internalVideo.src = this._internalVideoSRC = URL.createObjectURL(new Blob(u, h)), l.a.isIOS && this._internalVideo.load())
                },
                abortCurrentSecondaryLoad: function() {
                    this.__internalVideo && (this.__internalVideo.pause(), this.__internalVideo.removeAttribute("src"), this.__internalVideo.load(), l.a.isIOS && (this.__internalVideo = null), this._internalVideoSRC && (URL.revokeObjectURL(this._internalVideoSRC), this._internalVideoSRC = null), this.effectType = null)
                },
                get _internalVideo() {
                    var e = this.__internalVideo;
                    return e || (e = this.__internalVideo = document.createElement("video"), e.addEventListener("canplay", this.loadDidSucceed.bind(this)), e.addEventListener("error", this.loadDidFail.bind(this)), e.volume = 0), e
                },
                loadDidFail: function(e) {
                    if (e)
                        return e.errCode = d.a.VIDEO_FAILED_TO_LOAD, this._super(e);
                    var t = this.__internalVideo;
                    return t.error.errCode = d.a.VIDEO_FAILED_TO_LOAD, t ? this._super(t.error) : t
                },
                loadDidSucceed: function() {
                    var e = this.__internalVideo;
                    return e ? this._super(e) : e
                },
                preprocessAndAttemptToReadMetadataFromBuffer: function(e) {
                    var t = void 0,
                        r = void 0;
                    try {
                        t = new a.a(new a.b(e)), t.read()
                    } catch (e) {
                        t = null
                    }
                    if (!t)
                        return this.photoTime = null, this.frameTimes = null, void (this.videoRotation = 0);
                    var n = (r = t.tracks) && (r = r.vide) && (r = r[0]) && r.getAllSampleSeconds && r.getAllSampleSeconds();
                    n && (this.frameTimes = n);
                    var o = void 0;
                    try {
                        o = t.tracks.meta[0].timeToSeconds(t.tracks.meta[0].trak.edts.elst.editList[0].trackDuration)
                    } catch (e) {}
                    o && (this.photoTime = o);
                    var s = new Uint8Array(e),
                        d = (r = t.tracks) && (r = r.soun) && (r = r[0]) && (r = r.trak) && r.offset;
                    if (d) {
                        var l = "free";
                        s[d + 4] = l.charCodeAt(0), s[d + 5] = l.charCodeAt(1), s[d + 6] = l.charCodeAt(2), s[d + 7] = l.charCodeAt(3)
                    }
                    var u = [],
                        h = f[0],
                        p = (r = t.tracks) && (r = r.vide) && (r = r[0]) && (r = r.trak) && (r = r.tkhd) && (r = r.offset) && r + 48,
                        v = 0;
                    if (p) {
                        for (var y = 0; y < h.length; y++)
                            u[y] = s[p + y];
                        for (var g = 0; g < f.length; g++)
                            if (i(f[g], u)) {
                                v = 90 * g;
                                break
                            }
                        if (v)
                            for (var m = 0; m < h.length; m++)
                                s[p + m] = h[m]
                    }
                    this.videoRotation = v;
                    var b = t.metaData.keys && t.metaData.keys.keyList.get("com.apple.photos.variation-identifier"),
                        _ = void 0;
                    if (b > 0)
                        switch (t.metaData.values.items[b]) {
                        case 1:
                            _ = c.a.LOOP;
                            break;
                        case 2:
                            _ = c.a.BOUNCE;
                            break;
                        case 3:
                            _ = c.a.EXPOSURE
                        }
                    this.effectType = _
                }
            }),
            f = ["  0   1 0 0  |    0   0 0 0   |   0 0 0 0   |    0   0 0 0   |    0   1 0 0   |   0 0 0 0   |   0   0 0 0   |   0   0 0 0   |   64 0 0 0", "  0   0 0 0  |    0   1 0 0   |   0 0 0 0   |  255 255 0 0   |    0   0 0 0   |   0 0 0 0   |   4  56 0 0   |   0   0 0 0   |   64 0 0 0", "255 255 0 0  |    0   0 0 0   |   0 0 0 0   |    0   0 0 0   |  255 255 0 0   |   0 0 0 0   |   5 160 0 0   |   4  56 0 0   |   64 0 0 0", "  0   0 0 0  |  255 255 0 0   |   0 0 0 0   |    0   1 0 0   |    0   0 0 0   |   0 0 0 0   |   0   0 0 0   |   5 160 0 0   |   64 0 0 0"].map(function(e) {
                return e.replace(/\|/g, "").trim().split(/\s+/g).map(parseFloat)
            });
        t.a = p
    }, function(e, t, r) {
        "use strict";
        var i = r(4),
            n = r(1),
            a = r(2),
            o = a.a.isSafari,
            s = i.a.create({
                correspondingPlaybackStyle: n.a.FULL,
                get minimumShortenedDuration() {
                    return this.enterDuration + this.exitDuration + .01
                },
                get spontaneousFinishDuration() {
                    return this.exitDuration
                },
                enterDuration: 1 / 3,
                exitDuration: .5,
                videoBeginTime: .15,
                zoomScaleFactor: 1.075,
                blurRadius: 5,
                blurRadiusStep: .2,
                requiresInterpolation: !0,
                quantizeRadius: function(e) {
                    return this.blurRadiusStep ? Math.round(e / this.blurRadiusStep) * this.blurRadiusStep : e
                },
                easeInOut: function(e) {
                    return e < 0 ? 0 : e > 1 ? 1 : .5 - .5 * Math.cos(e * Math.PI)
                },
                calculateAnimationDuration: function(e, t, r) {
                    var i = t ? t + this.videoBeginTime + this.exitDuration : 0;
                    return Math.max(0, Math.min(e || 1 / 0, i))
                },
                getEntranceExitParameter: function(e, t) {
                    return Math.min(Math.max(0, Math.min(1, 1 - this.easeInOut((e - (t - this.exitDuration)) / this.exitDuration))), 1 - Math.max(0, Math.min(1, 1 - this.easeInOut(e / this.enterDuration)))) || 0
                },
                getTransform: function(e, t, r, i) {
                    var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        s = 1 + (this.zoomScaleFactor - 1) * this.getEntranceExitParameter(e, t),
                        d = -(s - 1) / 2 * r,
                        l = -(s - 1) / 2 * i,
                        c = Math.round(d * devicePixelRatio) / devicePixelRatio,
                        u = Math.round(l * devicePixelRatio) / devicePixelRatio;
                    return Math.abs(s - n) < 1e-5 ? "translate3d(" + c + "px, " + u + "px, 0) scale3d(" + a + ", " + o + ", 1)" : d || l || s ? "translate3d(" + d + "px, " + l + "px, 0) scale3d(" + s + ", " + s + ", 1)" : "translate3d(0, 0, 0)"
                },
                photo: i.a.PhotoIngredient.create({
                    opacity: i.a.computedStyle(function(e) {
                        if (e < this.recipe.enterDuration)
                            return (1 - this.recipe.easeInOut(e / this.recipe.enterDuration)).toString();
                        if (e < this.renderer.duration - this.recipe.exitDuration)
                            return "0";
                        var t = this.recipe.easeInOut((e - (this.renderer.duration - this.recipe.exitDuration)) / this.recipe.exitDuration);
                        return 1 !== t ? t : "1"
                    }),
                    display: i.a.computedStyle(function(e) {
                        return e > this.recipe.enterDuration && e < this.renderer.duration - this.recipe.exitDuration ? "none" : ""
                    }),
                    filter: i.a.computedStyle(function(e) {
                        if (!o)
                            return "";
                        var t = this.recipe,
                            r = t.blurRadius * t.getEntranceExitParameter(e, this.renderer.duration);
                        return r ? "blur(" + t.quantizeRadius(r) + "px)" : ""
                    }),
                    transform: i.a.computedStyle(function(e) {
                        return this.recipe.getTransform(e, this.renderer.duration, this.displayWidth, this.displayHeight)
                    }),
                    zIndex: i.a.computedStyle(function() {
                        return 3
                    })
                }),
                video: i.a.InterpolatedVideoIngredient.create({
                    get backingScaleFactor() {
                        return this.recipe.zoomScaleFactor
                    },
                    lookaheadTime: .01 + 7 / 15,
                    videoTimeAtTime: function(e) {
                        var t = Math.max(0, Math.min(this.videoDuration, e - this.recipe.videoBeginTime));
                        return Math.min(t, this.renderer.duration - this.recipe.exitDuration - this.recipe.videoBeginTime)
                    },
                    prepareVideoFramesFromTime: function(e) {
                        this.retainFramesForTime(e, e + this.lookaheadTime)
                    },
                    display: i.a.computedStyle(function(e) {
                        return 0 === e || e === this.renderer.duration ? "none" : ""
                    }),
                    transform: i.a.computedStyle(function(e) {
                        return this.recipe.getTransform(e, this.renderer.duration, this.displayWidth, this.displayHeight, this.backingScaleFactor, this.backingScaleX, this.backingScaleY)
                    }),
                    zIndex: i.a.computedStyle(function() {
                        return 1
                    })
                })
            });
        t.a = s
    }, function(e, t, r) {
        "use strict";
        var i = r(4),
            n = r(1),
            a = i.a.create({
                correspondingPlaybackStyle: n.a.HINT,
                minimumShortenedDuration: .9,
                get spontaneousFinishDuration() {
                    return this.exitBlurDuration
                },
                exitBlurDuration: .75,
                bottomVideoRevealBeginTime: .1,
                zoomScaleFactor: 1.075,
                blurRadius: 7.5,
                blurRadiusStep: 1,
                requiresInterpolation: !0,
                quantizeRadius: function(e) {
                    return Math.round(e / this.blurRadiusStep) * this.blurRadiusStep
                },
                tween: function(e) {
                    return e < 0 ? 0 : e > 1 ? 1 : .5 - .5 * Math.cos(e * Math.PI)
                },
                calculateAnimationDuration: function(e, t, r) {
                    var i = t ? t - r + this.exitBlurDuration : 0;
                    return Math.max(0, Math.min(e || 1 / 0, i))
                },
                photo: i.a.PhotoIngredient.create({
                    hideDuration: .06,
                    get returnDuration() {
                        return this.recipe.exitBlurDuration
                    },
                    opacity: i.a.computedStyle(function(e) {
                        if (e < this.hideDuration)
                            return (1 - this.recipe.tween(e / this.hideDuration)).toString();
                        if (e < this.renderer.duration - this.returnDuration)
                            return "0";
                        var t = this.recipe.tween((e - (this.renderer.duration - this.returnDuration)) / this.returnDuration);
                        return 1 !== t ? t.toString() : ""
                    }),
                    display: i.a.computedStyle(function(e) {
                        return e > this.hideDuration && e < this.renderer.duration - this.returnDuration ? "none" : ""
                    }),
                    webkitFilter: i.a.computedStyle(function(e) {
                        if (e < this.renderer.duration - this.returnDuration)
                            return "";
                        var t = this.recipe.blurRadius * (1 - this.recipe.tween((e - (this.renderer.duration - this.returnDuration)) / this.returnDuration));
                        return t ? "blur(" + this.recipe.quantizeRadius(t) + "px)" : ""
                    }),
                    transform: i.a.computedStyle(function(e) {
                        if (e < this.renderer.duration - this.returnDuration)
                            return "translateZ(0)";
                        var t = 1 + (this.recipe.zoomScaleFactor - 1) * (1 - this.recipe.tween((e - (this.renderer.duration - this.returnDuration)) / this.returnDuration));
                        return "translate3d(" + -(t - 1) / 2 * this.displayWidth + "px, " + -(t - 1) / 2 * this.displayHeight + "px, 0) scale3d(" + t + ", " + t + ", 1)"
                    }),
                    zIndex: i.a.computedStyle(function() {
                        return 3
                    })
                }),
                video: i.a.InterpolatedVideoIngredient.create({
                    get backingScaleFactor() {
                        return this.recipe.zoomScaleFactor
                    },
                    scaleInDuration: .15,
                    get blurOutDuration() {
                        return this.recipe.exitBlurDuration
                    },
                    lookaheadTime: .01 + 7 / 15,
                    videoTimeAtTime: function(e) {
                        return Math.min(this.videoDuration, e + this.renderer.photoTime)
                    },
                    prepareVideoFramesFromTime: function(e) {
                        this.retainFramesForTime(e, e + this.lookaheadTime)
                    },
                    display: i.a.computedStyle(function(e) {
                        return e && e !== this.renderer.duration ? "" : "none"
                    }),
                    transform: i.a.computedStyle(function(e) {
                        var t = 1 + (this.recipe.zoomScaleFactor - 1) * Math.max(0, Math.min(1, 1 - this.recipe.tween((e - (this.renderer.duration - this.blurOutDuration)) / this.blurOutDuration) - (1 - this.recipe.tween(e / this.scaleInDuration)))),
                            r = -(t - 1) / 2 * this.displayWidth,
                            i = -(t - 1) / 2 * this.displayHeight,
                            n = Math.round(r * devicePixelRatio) / devicePixelRatio,
                            a = Math.round(i * devicePixelRatio) / devicePixelRatio;
                        return Math.abs(t - this.backingScaleFactor) < 1e-5 ? "translate3d(" + n + "px, " + a + "px, 0) scale3d(" + this.backingScaleX + ", " + this.backingScaleY + ", 1)" : "translate3d(" + r + "px, " + i + "px, 0) scale3d(" + t + ", " + t + ", 1)"
                    }),
                    webkitFilter: i.a.computedStyle(function(e) {
                        var t = this.recipe.blurRadius * this.recipe.tween((e - (this.renderer.duration - this.blurOutDuration)) / this.blurOutDuration);
                        return t ? "blur(" + this.recipe.quantizeRadius(t) + "px)" : ""
                    }),
                    zIndex: i.a.computedStyle(function() {
                        return 1
                    })
                })
            });
        t.a = a
    }, function(e, t, r) {
        "use strict";
        var i = r(4),
            n = r(2),
            a = (n.a.isSafari, i.a.create({
                requiresInterpolation: !0,
                photo: i.a.PhotoIngredient.create({
                    display: i.a.computedStyle(function(e) {
                        return this.isPlaying || e > 0 ? "none" : ""
                    })
                }),
                video: i.a.InterpolatedVideoIngredient.create({
                    lookaheadTime: .01 + 7 / 15,
                    videoTimeAtTime: function(e) {
                        return e % this.renderer.duration
                    },
                    prepareVideoFramesFromTime: function(e) {
                        this.retainFramesForTime(e, e + this.lookaheadTime)
                    },
                    display: i.a.computedStyle(function(e) {
                        return ""
                    })
                }),
                beginFinishingPlaybackEarly: function(e) {
                    e.autoplay || (e.isPlaying ? e.pause() : e.wantsToPlay = !1)
                },
                continuePlayback: function(e) {
                    var t = e.currentTime,
                        r = e.duration;
                    t >= r && (e.currentTime = t % r), e._rafID = requestAnimationFrame(e._nextFrame.bind(e))
                }
            }));
        t.a = a
    }, function(e, t, r) {
        "use strict";
        var i = r(4),
            n = r(79),
            a = r(1);
        n.a.register();
        var o = i.a.create({
            correspondingPlaybackStyle: a.a.LOOP,
            photo: i.a.PhotoIngredient.create({
                display: i.a.computedStyle(function(e) {
                    return this.isPlaying || e > 0 ? "none" : ""
                })
            }),
            video: i.a.VideoIngredient.create({
                display: i.a.computedStyle(function(e) {
                    return ""
                })
            }),
            beginFinishingPlaybackEarly: function(e) {
                e.autoplay || (e.isPlaying ? e.pause() : e.wantsToPlay = !1)
            },
            continuePlayback: function(e) {
                var t = e.currentTime,
                    r = e.duration;
                t >= r && (e.currentTime = t % r), e._rafID = requestAnimationFrame(e._nextFrame.bind(e))
            },
            requestMoreCompatibleRecipe: function(e) {
                return i.a.registerRecipeWithPlaybackStyle(n.a, this.correspondingPlaybackStyle), n.a
            }
        });
        t.a = o
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = r(84),
            a = r(1),
            o = r(13),
            s = n.a.extend(o.a, {
                _loCanvas: null,
                _hiCanvas: null,
                backingScaleFactor: 1,
                setUpForRender: function() {
                    var e = this.element,
                        t = (this.isPlaying, this.renderer),
                        r = t.autoplay,
                        n = t.parentView,
                        o = t.playbackStyle,
                        s = t.video;
                    if (!this._loCanvas || !this._hiCanvas) {
                        e.innerHTML && (e.innerHTML = "");
                        var d = this._loCanvas = i.a.canvasPool.get(),
                            l = this._hiCanvas = i.a.canvasPool.get();
                        d._context = d.getContext("2d"), l._context = l.getContext("2d"), d.style.cssText = l.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; transform: translateZ(0);", e.appendChild(d), e.appendChild(l), this._swapCanvases()
                    }
                    e.className = "lpk-render-layer lpk-video", e.style.position = "absolute", e.style.transformOrigin = "0 0", e.style.zIndex = 1, this._super(), o === a.a.LOOP && (this.shouldLoop = !0), this.shouldLoop && requestAnimationFrame(function() {
                        s.currentTime = -1, r && n.play()
                    }), window.test = this
                },
                updateSize: function(e, t) {
                    if (!arguments.length)
                        return this._super();
                    this._super(e, t);
                    var r = Math.ceil(e * this.backingScaleFactor),
                        i = Math.ceil(t * this.backingScaleFactor);
                    this.backingScaleX = r / e, this.backingScaleY = i / t, this.element.style.width = r + "px", this.element.style.height = i + "px", this._loCanvas && this._hiCanvas && (this._loCanvas.width = this._hiCanvas.width = r * devicePixelRatio, this._loCanvas.height = this._hiCanvas.height = i * devicePixelRatio, this._loCanvas._drawnFrameNumber = this._hiCanvas._drawnFrameNumber = -1, this.renderAtTime())
                },
                renderAtTime: function(e) {
                    if (!arguments.length)
                        return this._super();
                    this._super(e);
                    var t = this.backingScaleX,
                        r = this.backingScaleY;
                    1 === t && 1 === r || (this.element.style.transform += " scale3d(" + 1 / t + ", " + 1 / r + ", 1)")
                },
                renderFramePair: function(e, t, r) {
                    (e && this._hiCanvas._drawnFrameNumber === e.number || t && this._loCanvas._drawnFrameNumber === t.number) && this._swapCanvases(), this._putFrameInCanvasIfNeeded(e, this._loCanvas), this._putFrameInCanvasIfNeeded(t, this._hiCanvas), t && (this._hiCanvas.style.opacity = r)
                },
                _swapCanvases: function() {
                    var e = this._hiCanvas;
                    this._hiCanvas = this._loCanvas, this._loCanvas = e, this._loCanvas.style.opacity = "", this._loCanvas.style.zIndex = 1, this._hiCanvas.style.zIndex = 2
                },
                _putFrameInCanvasIfNeeded: function(e, t) {
                    t._drawnFrameNumber !== (t._drawnFrameNumber = e ? e.number : -1) && (t.setAttribute("data-frame-number", t._drawnFrameNumber.toString()), e ? t._context.drawImage(e.image, 0, 0, t.width, t.height) : t._context.clearRect(0, 0, t.width, t.height))
                },
                dispose: function() {
                    this._super(), this._loCanvas && i.a.canvasPool.ret(this._loCanvas), this._hiCanvas && i.a.canvasPool.ret(this._hiCanvas)
                },
                tearDownFromRender: function() {
                    var e = this.renderer,
                        t = e.parentView;
                    this.shouldLoop = !1, t && t.stop(), this._clearAllRetainedFrames(), this._super()
                }
            });
        t.a = s
    }, function(e, t, r) {
        "use strict";
        var i = r(85),
            n = r(13),
            a = r(92),
            o = i.a.extend(n.a, {
                tagName: "canvas",
                get _canvas() {
                    return this.element
                },
                get _context() {
                    return this.__context || (this.__context = this._canvas.getContext("2d"))
                },
                init: function() {
                    this._super.apply(this, arguments), this.element.className = "lpk-render-layer lpk-photo", this.element.style.position = "absolute", this.element.style.width = this.element.style.height = "100%", this.element.style.transformOrigin = "0 0", this.element.style.zIndex = 2
                },
                tearDownFromRender: function() {
                    this._super(), this._canvas.width = this._canvas.height = 0
                },
                updateSize: function(e, t) {
                    if (!arguments.length)
                        return this._super();
                    this._super(e, t);
                    var i = Math.ceil(e * devicePixelRatio),
                        n = Math.ceil(t * devicePixelRatio),
                        o = this.photo,
                        s = this._canvas;
                    this._lastPhoto === (this._lastPhoto = o) && s.width === i && s.height === n || (s.width = i, s.height = n, o && r.i(a.a)(this._context, o, 0, 0, i, n))
                }
            });
        t.a = o
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            n = r(2),
            a = r(13),
            o = r(86),
            s = o.a.extend(a.a, {
                _isPlayingChanged: i.a.observer("isPlaying", function(e) {
                    this._video && (e ? (this.duration = 1 / 0, this.play()) : this.pause())
                }),
                _isVisible: !1,
                applyStyles: function() {
                    var e = this.element,
                        t = this.video,
                        r = this.videoRotation,
                        i = t.videoHeight,
                        n = t.videoWidth,
                        a = 1;
                    [90, 270].indexOf(r) >= 0 && (a = n / i);
                    var o = "\n                height: 100%;\n                position: absolute;\n                width: 100%;\n                -moz-transform: scale(" + a + ") rotate(" + r + "deg);\n                -webkit-transform: scale(" + a + ") rotate(" + r + "deg);\n                -o-transform: scale(" + a + ") rotate(" + r + "deg);\n                -ms-transform: scale(" + a + ") rotate(" + r + "deg);\n                transform: scale(" + a + ") rotate(" + r + "deg);\n                z-index: 1;\n            ";
                    e.setAttribute("style", o), e.className = "lpk-render-layer lpk-video", t.style.height = "100%", t.style.width = "100%"
                },
                cleanupElement: function() {
                    var e = this.element,
                        t = this.renderer,
                        r = this._video,
                        i = t.parentView;
                    e.innerHtml && (e.innerHtml = ""), r && (r.loop = !1, r.muted = !1, r.removeEventListener("pause", this.playIfPlaying)), i && i.stop(), delete this._video
                },
                pause: function() {
                    var e = this._isVisible,
                        t = this._video;
                    e && t.pause()
                },
                play: function() {
                    if (this._isVisible) {
                        var e = this._video,
                            t = e.play();
                        t ? t.catch(this._handlePlayFailure) : n.a.isIE || n.a.isEdge || (e.pause(), setTimeout(this._handlePlayFailure))
                    }
                },
                _handlePlayFailure: i.a.boundFunction(function() {
                    this.renderer.requestMoreCompatibleRecipe()
                }),
                playIfPlaying: i.a.boundFunction(function() {
                    var e = this.isPlaying,
                        t = this._video;
                    if (e && t.paused) {
                        var r = t.play();
                        r && r.catch(function() {})
                    }
                }),
                setUpForRender: function() {
                    var e = this.element,
                        t = (this.isPlaying, this.renderer),
                        r = t.autoplay,
                        i = t.parentView,
                        n = t.video;
                    this.cleanupElement(), e.appendChild(n), this.applyStyles(), n.loop = !0, n.muted = !0, this._video = n, this._isVisible = !0, this._super(), r && (n.addEventListener("pause", this.playIfPlaying), i.play())
                },
                tearDownFromRender: function() {
                    this.cleanupElement(), this._isVisible = !1, this._super()
                }
            });
        t.a = s
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            e.retain()
        }
        function n(e) {
            e.release()
        }
        var a = r(0),
            o = r(7),
            s = r(17),
            d = o.a.extend({
                videoDecoder: a.a.proxyProperty("renderer.videoDecoder"),
                videoDuration: a.a.proxyProperty("videoDecoder.duration"),
                canRender: a.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "videoDecoder.canProvideFrames"
                }),
                init: function() {
                    this._super.apply(this, arguments);
                    var e = this.layerName,
                        t = this.recipe;
                    this._framePrepIDKey = t.name + "_" + e + "_framePrepID"
                },
                videoTimeAtTime: function(e) {
                    return e
                },
                _videoTimeAtTime: function(e) {
                    return isNaN(e) ? e : this.videoTimeAtTime(e)
                },
                prepareToRenderAtTime: function(e) {
                    var t = this._currentPrepID = ++l;
                    if (!this.canRender)
                        return !1;
                    this.prepareVideoFramesFromTime(e);
                    for (var r, i = this._retainedFrames, n = 0, a = 0; r = i[a]; a++)
                        2 !== r.readyState && (r[this._framePrepIDKey] = t, r.onReadyOrFail(this._frameDidPrepare), n++);
                    return this._preppingFrameCount = n, !n
                },
                reduceMemoryFootprint: function() {
                    this._super(), this._clearAllRetainedFrames()
                },
                _clearAllRetainedFrames: function() {
                    this._clearExtraRetainedFrames(), this._clearRetainedInstantaneousFrames()
                },
                _clearExtraRetainedFrames: function() {
                    var e = this._retainedFrames;
                    e && (e.forEach(n), e.length = 0)
                },
                _clearRetainedInstantaneousFrames: function() {
                    this._retainedLoFrame && this._retainedLoFrame.release(), this._retainedHiFrame && this._retainedHiFrame.release(), this._retainedLoFrame = this._retainedHiFrame = null
                },
                _frameDidPrepare: a.a.boundFunction(function(e) {
                    e[this._framePrepIDKey] === this._currentPrepID && (e[this._framePrepIDKey] = void 0, --this._preppingFrameCount || this.renderer.prepareToRenderAtTime(this.renderer.currentTime))
                }),
                prepareVideoFramesFromTime: function(e) {
                    this.retainFramesForTime(e)
                },
                canRenderAtTime: function(e) {
                    if ("none" === this.display(e))
                        return !0;
                    if (!this.canRender)
                        return !1;
                    for (var t, r = !0, i = this.requiredFramesForTime(e), n = 0; t = i[n]; n++)
                        r = r && 2 === t.readyState, t.retain().release();
                    return r
                },
                renderAtTime: function(e) {
                    if (!arguments.length)
                        return this._super();
                    if ("none" === this.display(e))
                        return this._clearRetainedInstantaneousFrames(), this._super(e);
                    var t = this._videoTimeAtTime(e),
                        r = this.requiredFramesForVideoTime(t),
                        i = r[0] || null,
                        n = r[1] || null;
                    if (i && i.retain(), n && n.retain(), this._clearRetainedInstantaneousFrames(), this._retainedLoFrame = i, this._retainedHiFrame = n, i && (i = i.backingFrame), n && (n = n.backingFrame), i && n && i.number > n.number) {
                        var a = i;
                        n = i, i = a
                    }
                    i === n && (n = null);
                    var o = !i || n ? this.videoDecoder.fractionalIndexForTime(t) : i.frameNumber,
                        s = o - (0 | o);
                    this.renderFramePair(i, n, s), this._super(e)
                },
                renderFramePair: function() {},
                requiredFramesForVideoTime: function(e, t, r) {
                    isNaN(t) && (t = e);
                    var i = this.videoDecoder,
                        n = this.videoDuration,
                        a = i.frameCount,
                        o = c;
                    if (o.length = 0, t < 0 || e > n || isNaN(e) || isNaN(t))
                        return o;
                    var d = Math.max(0, Math.floor(i.fractionalIndexForTime(e))),
                        l = Math.min(i.frameCount, Math.ceil(i.fractionalIndexForTime(t))),
                        u = l < d,
                        h = u ? a - 1 : l;
                    if (d === h - 1) {
                        var p = i.frameTimes;
                        p[h] - p[d] < 1 / 30 + .001 && (h = d)
                    }
                    for (var f = d; f <= h; f++)
                        s.a && 0 === f || (o.push(i.getFrame(f, r)), f + 1 === a && u && (f = -1, h = l));
                    return o
                },
                requiredFramesForTime: function(e, t, r) {
                    return this.requiredFramesForVideoTime(this._videoTimeAtTime(e), this._videoTimeAtTime(t), r)
                },
                retainFramesForVideoTime: function(e, t, r) {
                    void 0 === t && (t = e);
                    var a = this.lookaheadTime,
                        o = this.shouldLoop,
                        s = this.requiredFramesForVideoTime(e, t, r),
                        d = this._retainedFrames || (this._retainedFrames = []);
                    s.forEach(i);
                    for (var l = d.length - 1; l >= 0; l--) {
                        var c = d[l],
                            u = c.time;
                        (!o || u > a / 2) && (n(c), d.splice(l, 1))
                    }
                    d.push.apply(d, s)
                },
                retainFramesForTime: function(e, t, r) {
                    return this.retainFramesForVideoTime(this._videoTimeAtTime(e), this._videoTimeAtTime(t), r)
                },
                dispose: function() {
                    this.retainFramesForVideoTime(NaN), this._super()
                }
            }),
            l = 1,
            c = [];
        t.a = d
    }, function(e, t, r) {
        "use strict";
        var i = r(7),
            n = r(0),
            a = i.a.extend({
                isPlaying: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "renderer.parentView.isPlaying"
                }),
                photo: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "renderer.photo"
                }),
                canRender: n.a.proxyProperty("photo"),
                canRenderAtTime: function(e) {
                    var t = this.photo;
                    return !("none" !== this.display(e) && (!t || t instanceof Image && !t.complete))
                }
            });
        t.a = a
    }, function(e, t, r) {
        "use strict";
        var i = r(7),
            n = r(0),
            a = i.a.extend({
                canRender: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "video"
                }),
                isPlaying: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "renderer.parentView.isPlaying"
                }),
                video: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "renderer.video"
                }),
                videoRotation: n.a.proxyProperty({
                    readOnly: !0,
                    proxyPath: "renderer.provider.videoRotation"
                })
            });
        t.a = a
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function n(e) {
            var t = r.i(o.a)(e),
                i = l.get(t);
            if (i)
                return i;
            var n = e.map(function(e) {
                if ("i" === e[0] && h(e[1]))
                    return "I" + e.substring(1)
            });
            return e = e.concat(n.filter(function(e) {
                return !!e
            })), i = new RegExp(e.join("|"), "g"), l.set(t, i), i
        }
        function a(e, t) {
            var r = e.charCodeAt(0),
                i = t.charCodeAt(0),
                n = new Map;
            return function(e) {
                var t = n.get(e);
                if (void 0 !== t)
                    return t;
                var a = e.charCodeAt(0);
                return t = a >= r && a <= i, n.set(e, t), t
            }
        }
        var o = r(20),
            s = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            d = ["iOS", "iPhone", "iPad", "iPod", "WebKit"],
            l = new Map,
            c = a("0", "9"),
            u = a("a", "z"),
            h = a("A", "Z"),
            p = function(e) {
                return u(e) || h(e)
            },
            f = function(e) {
                return p(e) || c(e)
            },
            v = new Map,
            y = function() {
                function e() {
                    i(this, e)
                }
                return s(e, null, [{
                    key: "splitIntoArray",
                    value: function(e, t, r) {
                        for (var i = e.indexOf(t), n = 0, a = t.length; -1 !== i;)
                            r.push(e.substring(n, i)), n = i + a, i = e.indexOf(t, n);
                        r.push(e.substring(n))
                    }
                }, {
                    key: "hyphenate",
                    value: function(t, i, n) {
                        if (!t)
                            return "";
                        i || null === i || !1 === i || (i = d);
                        var a = i || n ? r.i(o.a)(i) + "#" + t + "#" + !!n : t,
                            s = v.get(a);
                        if (s)
                            return s;
                        if (Array.isArray(i)) {
                            var l = e.hyphenateCarefully(t, i, n);
                            return v.set(a, l), l
                        }
                        var y = t.length,
                            g = "",
                            m = void 0,
                            b = void 0,
                            _ = void 0,
                            P = void 0,
                            T = void 0;
                        for (m = 0; m < y; m++)
                            b = t[m - 1], _ = t[m], P = _.toLowerCase(), T = t[m + 1], b && f(_) && f(b) && (!h(b) && h(_) || c(b) && p(_) || T && h(b) && h(_) && u(T)) ? g += "-" + P : g += P;
                        return v.set(a, g), g
                    }
                }, {
                    key: "hyphenateCarefully",
                    value: function(t, r, i) {
                        var a = n(r),
                            o = t.match(a);
                        if (!o || !o.length)
                            return e.hyphenate(t, null, i);
                        for (var s = t.split(a), d = e.hyphenate(s[0]), l = 0, c = o.length; l < c; l++) {
                            var u = o[l];
                            i || (u = u.toLowerCase());
                            var h = s[l + 1];
                            h && (h = e.hyphenate(h, null, i)), d += (d && "-") + u, h && (d += (p(h[0]) ? "-" : "") + h)
                        }
                        return d
                    }
                }]), e
            }();
        t.a = y
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function n(e, t) {
            e || a(t)
        }
        function a(e) {
            throw e
        }
        var o = r(5);
        r.d(t, "b", function() {
            return d
        }), r.d(t, "a", function() {
            return l
        });
        var s = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            d = (function() {
                function e(t, r) {
                    i(this, e), this.w = t, this.h = r
                }
                s(e, [{
                    key: "toString",
                    value: function() {
                        return "(" + this.w + ", " + this.h + ")"
                    }
                }, {
                    key: "getHalfSize",
                    value: function() {
                        return new e(this.w >>> 1, this.h >>> 1)
                    }
                }, {
                    key: "length",
                    value: function() {
                        return this.w * this.h
                    }
                }])
            }(), function() {
                function e(t, r, n) {
                    i(this, e), this.bytes = new Uint8Array(t), this.start = r || 0, this.pos = this.start, this.end = r + n || this.bytes.length
                }
                return s(e, [{
                    key: "readU8Array",
                    value: function(e) {
                        if (this.pos > this.end - e)
                            return null;
                        var t = this.bytes.subarray(this.pos, this.pos + e);
                        return this.pos += e, t
                    }
                }, {
                    key: "readU32Array",
                    value: function(e, t, r) {
                        if (t = t || 1, this.pos > this.end - e * t * 4)
                            return null;
                        if (1 === t) {
                            for (var i = new Uint32Array(e), n = 0; n < e; n++)
                                i[n] = this.readU32();
                            return i
                        }
                        for (var a = new Array(e), o = 0; o < e; o++) {
                            var s = null;
                            if (r) {
                                s = {};
                                for (var d = 0; d < t; d++)
                                    s[r[d]] = this.readU32()
                            } else {
                                s = new Uint32Array(t);
                                for (var l = 0; l < t; l++)
                                    s[l] = this.readU32()
                            }
                            a[o] = s
                        }
                        return a
                    }
                }, {
                    key: "read8",
                    value: function() {
                        return this.readU8() << 24 >> 24
                    }
                }, {
                    key: "readU8",
                    value: function() {
                        return this.pos >= this.end ? null : this.bytes[this.pos++]
                    }
                }, {
                    key: "read16",
                    value: function() {
                        return this.readU16() << 16 >> 16
                    }
                }, {
                    key: "readU16",
                    value: function() {
                        if (this.pos >= this.end - 1)
                            return null;
                        var e = this.bytes[this.pos + 0] << 8 | this.bytes[this.pos + 1];
                        return this.pos += 2, e
                    }
                }, {
                    key: "read24",
                    value: function() {
                        return this.readU24() << 8 >> 8
                    }
                }, {
                    key: "readU24",
                    value: function() {
                        var e = this.pos,
                            t = this.bytes;
                        if (e > this.end - 3)
                            return null;
                        var r = t[e + 0] << 16 | t[e + 1] << 8 | t[e + 2];
                        return this.pos += 3, r
                    }
                }, {
                    key: "peek32",
                    value: function(e) {
                        var t = this.pos,
                            r = this.bytes;
                        if (t > this.end - 4)
                            return null;
                        var i = r[t + 0] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3];
                        return e && (this.pos += 4), i
                    }
                }, {
                    key: "read32",
                    value: function() {
                        return this.peek32(!0)
                    }
                }, {
                    key: "readU32",
                    value: function() {
                        return this.peek32(!0) >>> 0
                    }
                }, {
                    key: "read4CC",
                    value: function() {
                        var e = this.pos;
                        if (e > this.end - 4)
                            return null;
                        for (var t = "", r = 0; r < 4; r++)
                            t += String.fromCharCode(this.bytes[e + r]);
                        return this.pos += 4, t
                    }
                }, {
                    key: "readFP16",
                    value: function() {
                        return this.read32() / 65536
                    }
                }, {
                    key: "readFP8",
                    value: function() {
                        return this.read16() / 256
                    }
                }, {
                    key: "readISO639",
                    value: function() {
                        for (var e = this.readU16(), t = "", r = 0; r < 3; r++) {
                            var i = e >>> 5 * (2 - r) & 31;
                            t += String.fromCharCode(i + 96)
                        }
                        return t
                    }
                }, {
                    key: "readUTF8",
                    value: function(e) {
                        for (var t = "", r = 0; r < e; r++)
                            t += String.fromCharCode(this.readU8());
                        return t
                    }
                }, {
                    key: "readPString",
                    value: function(e) {
                        var t = this.readU8();
                        n(t <= e);
                        var r = this.readUTF8(t);
                        return this.reserved(e - t - 1, 0), r
                    }
                }, {
                    key: "skip",
                    value: function(e) {
                        this.seek(this.pos + e)
                    }
                }, {
                    key: "reserved",
                    value: function(e, t) {
                        for (var r = 0; r < e; r++)
                            n(this.readU8() === t)
                    }
                }, {
                    key: "seek",
                    value: function(e) {
                        (e < 0 || e > this.end) && a("Index out of bounds (bounds: [0, " + this.end + "], index: " + e + ")."), this.pos = e
                    }
                }, {
                    key: "subStream",
                    value: function(t, r) {
                        return new e(this.bytes.buffer, t, r)
                    }
                }, {
                    key: "uint",
                    value: function(e) {
                        for (var t = this.position, r = t + e, i = 0, n = t; n < r; n++)
                            i <<= 8, i |= 255 & this.readU8();
                        return i
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this.end - this.start
                    }
                }, {
                    key: "position",
                    get: function() {
                        return this.pos
                    }
                }, {
                    key: "remaining",
                    get: function() {
                        return this.end - this.pos
                    }
                }]), e
            }()),
            l = function() {
                function e(t) {
                    i(this, e), this.stream = t, this.tracks = {}, this.metaData = {}
                }
                return s(e, [{
                    key: "getPath",
                    value: function(e) {
                        for (var t = e.split("."), r = this, i = 0, n = t.length; i < n; i++)
                            r = r ? r[t[i]] : void 0;
                        return r
                    }
                }, {
                    key: "readBoxes",
                    value: function(e, t) {
                        for (; e.peek32();) {
                            var r = this.readBox(e);
                            if (r.type in t) {
                                var i = t[r.type];
                                Array.isArray(i) || (t[r.type] = [i]), t[r.type].push(r)
                            } else
                                t[r.type] = r
                        }
                    }
                }, {
                    key: "readBox",
                    value: function(e) {
                        function t() {
                            o.version = e.readU8(), o.flags = e.readU24()
                        }
                        function r() {
                            return o.size - (e.position - o.offset)
                        }
                        function i() {
                            e.skip(r())
                        }
                        function a() {
                            var t = e.subStream(e.position, r());
                            s.readBoxes(t, o), e.skip(t.length)
                        }
                        var o = {
                                offset: e.position
                            },
                            s = this;
                        !function() {
                            o.size = e.readU32(), o.type = e.read4CC()
                        }();
                        var d = void 0,
                            l = void 0,
                            u = void 0;
                        switch (o.type) {
                        case "ftyp":
                            var h = o;
                            h.name = "File Type Box", h.majorBrand = e.read4CC(), h.minorVersion = e.readU32(), h.compatibleBrands = new Array((h.size - 16) / 4);
                            for (var p = 0; p < h.compatibleBrands.length; p++)
                                h.compatibleBrands[p] = e.read4CC();
                            break;
                        case "moov":
                            o.name = "Movie Box", a();
                            break;
                        case "mvhd":
                            var f = o;
                            f.name = "Movie Header Box", t(), n(0 == f.version), f.creationTime = e.readU32(), f.modificationTime = e.readU32(), f.timeScale = e.readU32(), f.duration = e.readU32(), f.rate = e.readFP16(), f.volume = e.readFP8(), e.skip(10), f.matrix = e.readU32Array(9), e.skip(24), f.nextTrackId = e.readU32();
                            break;
                        case "trak":
                            var v = o;
                            v.name = "Track Box", a();
                            var y = new c(this, v),
                                g = v.mdia && v.mdia.hdlr && v.mdia.hdlr.handlerType || "unknownHandlerType",
                                m = this.tracks;
                            (m[g] || (m[g] = [])).push(y), m[v.tkhd.trackId] = y;
                            break;
                        case "tkhd":
                            var b = o;
                            b.name = "Track Header Box", t(), n(0 == b.version), b.creationTime = e.readU32(), b.modificationTime = e.readU32(), b.trackId = e.readU32(), e.skip(4), b.duration = e.readU32(), e.skip(8), b.layer = e.readU16(), b.alternateGroup = e.readU16(), b.volume = e.readFP8(), e.skip(2), b.matrix = e.readU32Array(9), b.width = e.readFP16(), b.height = e.readFP16();
                            break;
                        case "edts":
                            o.name = "Edit Atom", a();
                            break;
                        case "elst":
                            var _ = o;
                            _.name = "Edit List Atom", t(), _.editList = [], u = e.readU32();
                            for (var P = 0; P < u; P++)
                                _.editList.push({
                                    trackDuration: e.read32(),
                                    mediaTime: e.read32(),
                                    mediaRate: e.readU32()
                                });
                            n(!r()), i();
                            break;
                        case "mdia":
                            o.name = "Media Box", a();
                            break;
                        case "mdhd":
                            var T = o;
                            T.name = "Media Header Box", t(), n(0 == T.version), T.creationTime = e.readU32(), T.modificationTime = e.readU32(), T.timeScale = e.readU32(), T.duration = e.readU32(), T.language = e.readISO639(), e.skip(2);
                            break;
                        case "hdlr":
                            var x = o;
                            x.name = "Handler Reference Box", t(), e.skip(4), x.handlerType = e.read4CC(), e.skip(12), l = x.size - 32, l > 0 && (x.name = e.readUTF8(l));
                            break;
                        case "minf":
                            o.name = "Media Information Box", a();
                            break;
                        case "stbl":
                            o.name = "Sample Table Box", a();
                            break;
                        case "stsd":
                            var k = o;
                            k.name = "Sample Description Box", t(), k.sd = [], e.readU32(), a();
                            break;
                        case "avc1":
                            var S = o;
                            e.reserved(6, 0), S.dataReferenceIndex = e.readU16(), n(0 == e.readU16()), n(0 == e.readU16()), e.readU32(), e.readU32(), e.readU32(), S.width = e.readU16(), S.height = e.readU16(), S.horizontalResolution = e.readFP16(), S.verticalResolution = e.readFP16(), n(0 == e.readU32()), S.frameCount = e.readU16(), S.compressorName = e.readPString(32), S.depth = e.readU16(), n(65535 == e.readU16()), a();
                            break;
                        case "mp4a":
                            var E = o;
                            if (e.reserved(6, 0), E.dataReferenceIndex = e.readU16(), E.version = e.readU16(), 0 !== E.version) {
                                i();
                                break
                            }
                            e.skip(2), e.skip(4), E.channelCount = e.readU16(), E.sampleSize = e.readU16(), E.compressionId = e.readU16(), E.packetSize = e.readU16(), E.sampleRate = e.readU32() >>> 16, a();
                            break;
                        case "esds":
                            o.name = "Elementary Stream Descriptor", t(), i();
                            break;
                        case "avcC":
                            var O = o;
                            O.name = "AVC Configuration Box", O.configurationVersion = e.readU8(), O.avcProfileIndicaation = e.readU8(), O.profileCompatibility = e.readU8(), O.avcLevelIndication = e.readU8(), O.lengthSizeMinusOne = 3 & e.readU8(), n(3 == O.lengthSizeMinusOne, "TODO"), d = 31 & e.readU8(), O.sps = [];
                            for (var w = 0; w < d; w++)
                                O.sps.push(e.readU8Array(e.readU16()));
                            d = 31 & e.readU8(), O.pps = [];
                            for (var L = 0; L < d; L++)
                                O.pps.push(e.readU8Array(e.readU16()));
                            i();
                            break;
                        case "btrt":
                            var C = o;
                            C.name = "Bit Rate Box", C.bufferSizeDb = e.readU32(), C.maxBitrate = e.readU32(), C.avgBitrate = e.readU32();
                            break;
                        case "stts":
                            var F = o;
                            F.name = "Decoding Time to Sample Box", t(), F.table = e.readU32Array(e.readU32(), 2, ["count", "delta"]);
                            break;
                        case "stss":
                            var B = o;
                            B.name = "Sync Sample Box", t(), B.samples = e.readU32Array(e.readU32());
                            break;
                        case "stsc":
                            var V = o;
                            V.name = "Sample to Chunk Box", t(), V.table = e.readU32Array(e.readU32(), 3, ["firstChunk", "samplesPerChunk", "sampleDescriptionId"]);
                            break;
                        case "stsz":
                            var R = o;
                            R.name = "Sample Size Box", t(), R.sampleSize = e.readU32(), d = e.readU32(), 0 == R.sampleSize && (R.table = e.readU32Array(d));
                            break;
                        case "stco":
                            var j = o;
                            j.name = "Chunk Offset Box", t(), j.table = e.readU32Array(e.readU32());
                            break;
                        case "smhd":
                            var I = o;
                            I.name = "Sound Media Header Box", t(), I.balance = e.readFP8(), e.reserved(2, 0);
                            break;
                        case "mdat":
                            var A = o;
                            A.name = "Media Data Box", n(A.size >= 8, "Cannot parse large media data yet."), A.data = e.readU8Array(r());
                            break;
                        case "mebx":
                            o.name = "Mebx", a();
                            break;
                        case "meta":
                            o.name = "Metadata", a();
                            break;
                        case "keys":
                            var D = o;
                            D.name = "Metadata Item Keys", t();
                            var M = D.keyCount = e.read32(),
                                U = D.offset - D.size;
                            D.keyList = new Map;
                            for (var N = 1; N <= M; N++) {
                                var z = e.read32() - 8;
                                z < 1 || z > U || (e.skip(4), D.keyList.set(e.readUTF8(z), N))
                            }
                            this.metaData.keys = D;
                            break;
                        case "ilst":
                            var H = o;
                            H.name = "Metadata Item List", H.items = [];
                            for (var K = H.offset + H.size; e.position < K;) {
                                var W = (e.position, e.readU32(), e.readU32()),
                                    q = e.readU32() - 16,
                                    G = (e.read4CC(), e.readU8()),
                                    X = e.readU24(),
                                    Z = (e.readU16(), e.readU16(), void 0);
                                Z = 0 === G && 1 !== X ? e.uint(q) : e.readUTF8(q), H.items[W] = Z
                            }
                            this.metaData.values = H;
                            break;
                        default:
                            i()
                        }
                        return o
                    }
                }, {
                    key: "read",
                    value: function() {
                        var e = (new Date).getTime();
                        this.file = {}, this.readBoxes(this.stream, this.file), o.a.info("Parsed stream in " + ((new Date).getTime() - e) + " ms")
                    }
                }, {
                    key: "traceSamples",
                    value: function() {
                        var e = this.tracks[1],
                            t = this.tracks[2];
                        o.a.info("Video Samples: " + e.getSampleCount()), o.a.info("Audio Samples: " + t.getSampleCount());
                        for (var r = 0, i = 0, n = 0; n < 100; n++) {
                            var a = e.sampleToOffset(r),
                                s = t.sampleToOffset(i),
                                d = e.sampleToSize(r, 1),
                                l = t.sampleToSize(i, 1);
                            a < s ? (o.a.info("V Sample " + r + " Offset : " + a + ", Size : " + d), r++) : (o.a.info("A Sample " + i + " Offset : " + s + ", Size : " + l), i++)
                        }
                    }
                }]), e
            }(),
            c = function() {
                function e(t, r) {
                    i(this, e), this.file = t, this.trak = r
                }
                return s(e, [{
                    key: "getSampleSizeTable",
                    value: function() {
                        return this.trak.mdia.minf.stbl.stsz.table
                    }
                }, {
                    key: "getSampleCount",
                    value: function() {
                        return this.getSampleSizeTable().length
                    }
                }, {
                    key: "sampleToSize",
                    value: function(e, t) {
                        for (var r = this.getSampleSizeTable(), i = 0, n = e; n < e + t; n++)
                            i += r[n];
                        return i
                    }
                }, {
                    key: "sampleToChunk",
                    value: function(e) {
                        var t = this.trak.mdia.minf.stbl.stsc.table;
                        if (1 === t.length) {
                            var r = t[0];
                            return n(1 === r.firstChunk), {
                                index: e / r.samplesPerChunk,
                                offset: e % r.samplesPerChunk
                            }
                        }
                        for (var i = 0, a = 0; a < t.length; a++) {
                            var o = t[a];
                            if (a > 0) {
                                var s = t[a - 1],
                                    d = o.firstChunk - s.firstChunk,
                                    l = s.samplesPerChunk * d;
                                if (!(e >= l))
                                    return {
                                        index: i + Math.floor(e / s.samplesPerChunk),
                                        offset: e % s.samplesPerChunk
                                    };
                                if (e -= l, a === t.length - 1)
                                    return {
                                        index: i + d + Math.floor(e / o.samplesPerChunk),
                                        offset: e % o.samplesPerChunk
                                    };
                                i += d
                            }
                        }
                        n(!1)
                    }
                }, {
                    key: "chunkToOffset",
                    value: function(e) {
                        return this.trak.mdia.minf.stbl.stco.table[e]
                    }
                }, {
                    key: "sampleToOffset",
                    value: function(e) {
                        var t = this.sampleToChunk(e);
                        return this.chunkToOffset(t.index) + this.sampleToSize(e - t.offset, t.offset)
                    }
                }, {
                    key: "timeToSample",
                    value: function(e) {
                        for (var t = this.trak.mdia.minf.stbl.stts.table, r = 0, i = 0; i < t.length; i++) {
                            var n = t[i].count * t[i].delta;
                            if (!(e >= n))
                                return r + Math.floor(e / t[i].delta);
                            e -= n, r += t[i].count
                        }
                    }
                }, {
                    key: "sampleToTime",
                    value: function(e) {
                        for (var t = this.trak.mdia.minf.stbl.stts.table, r = 0, i = 0, n = 0; n < t.length && r < e; n++) {
                            var a = t[n],
                                o = Math.min(e - r, a.count);
                            r += o, i += o * a.delta
                        }
                        return i
                    }
                }, {
                    key: "getTotalTime",
                    value: function() {
                        for (var e = this.trak.mdia.minf.stbl.stts.table, t = 0, r = 0; r < e.length; r++)
                            t += e[r].count * e[r].delta;
                        return n(this.trak.mdia.mdhd.duration === t), this.trak.mdia.mdhd.duration
                    }
                }, {
                    key: "getTotalTimeInSeconds",
                    value: function() {
                        return this.timeToSeconds(this.getTotalTime())
                    }
                }, {
                    key: "getTimeScale",
                    value: function() {
                        return this.trak.mdia.mdhd.timeScale
                    }
                }, {
                    key: "timeToSeconds",
                    value: function(e) {
                        return e / this.getTimeScale()
                    }
                }, {
                    key: "secondsToTime",
                    value: function(e) {
                        return e * this.getTimeScale()
                    }
                }, {
                    key: "secondsToSample",
                    value: function(e) {
                        return this.timeToSample(this.secondsToTime(e))
                    }
                }, {
                    key: "sampleToSeconds",
                    value: function(e) {
                        return this.timeToSeconds(this.sampleToTime(e))
                    }
                }, {
                    key: "getAllSampleTimes",
                    value: function() {
                        for (var e = [], t = this.getSampleCount(), r = 0; r < t; r++)
                            e.push(this.sampleToTime(r));
                        return e
                    }
                }, {
                    key: "getAllSampleSeconds",
                    value: function() {
                        for (var e = [], t = this.getSampleCount(), r = 0; r < t; r++)
                            e.push(this.sampleToSeconds(r));
                        return e
                    }
                }, {
                    key: "getSampleNALUnits",
                    value: function(e) {
                        for (var t = this.file.stream.bytes, r = this.sampleToOffset(e), i = r + this.sampleToSize(e, 1), n = []; i - r > 0;) {
                            var a = new d(t.buffer, r).readU32();
                            n.push(t.subarray(r + 4, r + a + 4)), r = r + a + 4
                        }
                        return n
                    }
                }]), e
            }()
    }, function(e, t, r) {
        "use strict";
        var i = {
            staticMembers: {
                _pool: null,
                _cache: null,
                init: function() {
                    this._pool = [], this._cache = {}, this._super()
                },
                getPoolingCacheKey: function() {
                    throw "Must implement `getPoolingCacheKey` to use PoolCaching."
                },
                getCached: function() {
                    var e = this.getPoolingCacheKey.apply(this, arguments),
                        t = this._cache[e];
                    return t || (t = this._cache[e] = this._pool.pop() || this.create(), t._poolingCacheKey = e, t.initFromPool.apply(t, arguments)), t
                },
                peekCached: function() {
                    var e = this.getPoolingCacheKey.apply(this, arguments);
                    return this._cache[e] || null
                },
                _disposeInstance: function(e) {
                    delete this._cache[e._poolingCacheKey], e._poolingCacheKey = void 0, e._poolingLifecycleCount = 1 + (0 | e._poolingLifecycleCount), this._pool.push(e)
                }
            },
            dispose: function() {},
            _poolingCacheKey: null,
            initFromPool: function() {},
            _retainCount: 0,
            retain: function() {
                return this._retainCount++, this
            },
            release: function() {
                return this._retainCount--, this._retainCount || this.dispose(), this
            }
        };
        t.a = i
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function n(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var o = r(19);
        r.d(t, "a", function() {
            return c
        }), r.d(t, "b", function() {
            return h
        }), r.d(t, "c", function() {
            return f
        }), r.d(t, "d", function() {
            return y
        });
        var s = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            d = function() {
                function e() {
                    a(this, e), this._a = []
                }
                return s(e, [{
                    key: "get",
                    value: function() {
                        return this._a.pop() || this.create()
                    }
                }, {
                    key: "ret",
                    value: function(e) {
                        this.prepare(e), this._a.push(e)
                    }
                }]), e
            }(),
            l = function(e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return n(t, e), s(t, [{
                    key: "create",
                    value: function() {
                        return []
                    }
                }, {
                    key: "prepare",
                    value: function(e) {
                        e.length = 0
                    }
                }]), t
            }(d),
            c = new l,
            u = function(e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return n(t, e), s(t, [{
                    key: "create",
                    value: function() {
                        return new o.a
                    }
                }, {
                    key: "prepare",
                    value: function(e) {
                        e.clear()
                    }
                }]), t
            }(d),
            h = new u,
            p = function(e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return n(t, e), s(t, [{
                    key: "create",
                    value: function() {
                        return Object.create(null)
                    }
                }, {
                    key: "prepare",
                    value: function(e) {
                        var t = e;
                        for (var r in t)
                            delete t[r]
                    }
                }]), t
            }(d),
            f = new p,
            v = function(e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return n(t, e), s(t, [{
                    key: "create",
                    value: function() {
                        return document.createElement("canvas")
                    }
                }, {
                    key: "prepare",
                    value: function(e) {
                        var t = e.parentNode;
                        t && t.removeChild(e), e.width = e.height = 0
                    }
                }]), t
            }(d),
            y = new v
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            return e.apply(void 0, t)
        }
        var n = {
            _readiness: "pending",
            _resolutionArgs: null,
            _fulfillmentCallbacks: null,
            _rejectionCallbacks: null,
            onReadyOrFail: function(e, t) {
                this._resolveIfAlreadyResolved(e, t, !1) || this._pendCallbacks(e, t)
            },
            onReadyOrFailSync: function(e, t) {
                this._resolveIfAlreadyResolved(e, t, !0) || this._pendCallbacks(e, t)
            },
            _resolveIfAlreadyResolved: function(e, t, r) {
                var n = this._resolutionArgs;
                return "success" === this._readiness && e ? (r ? i(e, n) : setTimeout(i, 0, e, n), !0) : !("failure" !== this._readiness || !t) && (r ? i(t, n) : setTimeout(i, 0, t, n), !0)
            },
            _pendCallbacks: function(e, t) {
                e && (this._fulfillmentCallbacks || (this._fulfillmentCallbacks = [])).push(e), t && (this._rejectionCallbacks || (this._rejectionCallbacks = [])).push(t)
            },
            clearReadinessCallbacks: function() {
                this._fulfillmentCallbacks && (this._fulfillmentCallbacks.length = 0), this._rejectionCallbacks && (this._rejectionCallbacks.length = 0)
            },
            resetReadiness: function() {
                this._readiness = "pending", this._resolutionArgs && (this._resolutionArgs.length = 0), this.clearReadinessCallbacks()
            },
            resolveReadiness: function() {
                "pending" === this._readiness && (this._readiness = "success", (this._resolutionArgs = this._resolutionArgs || []).push.apply(this._resolutionArgs, arguments), this._invokeCallbacks(this._fulfillmentCallbacks), this.clearReadinessCallbacks())
            },
            rejectReadiness: function() {
                "pending" === this._readiness && (this._readiness = "failure", (this._resolutionArgs = this._resolutionArgs || []).push.apply(this._resolutionArgs, arguments), this._invokeCallbacks(this._rejectionCallbacks), this.clearReadinessCallbacks())
            },
            _invokeCallbacks: function(e) {
                if (e) {
                    for (var t, r = 0; t = e[r]; r++)
                        t.apply(void 0, this._resolutionArgs);
                    e.length = 0
                }
            }
        };
        t.a = n
    }, function(e, t, r) {
        "use strict";
        function i() {
            for (var e = 1; e < arguments.length; e++)
                this[e - 1] = arguments[e];
            return this
        }
        function n(e) {
            return e && "IMG" === e.tagName && /^data:image\/svg|\.svg\?|\.svg$/.test(e.src)
        }
        var a = document.createElement("canvas"),
            o = a.getContext("2d"),
            s = document.createElement("canvas"),
            d = s.getContext("2d");
        a.width = s.width = a.height = s.height = 0;
        var l = !1,
            c = !1,
            u = function(e, t) {
                for (var r = arguments.length, u = Array(r > 2 ? r - 2 : 0), p = 2; p < r; p++)
                    u[p - 2] = arguments[p];
                if (n(t))
                    return e.drawImage.apply(e, i.apply(h, arguments)), !0;
                var f = l,
                    v = c;
                l = c = !1;
                var y = t instanceof HTMLImageElement ? t.naturalWidth : t.width,
                    g = t instanceof HTMLImageElement ? t.naturalHeight : t.height;
                if (!y || !g)
                    throw "Source image provided to drawImageSmooth was not loaded, or otherwise had no dimensions.";
                var m = void 0,
                    b = void 0,
                    _ = void 0,
                    P = void 0,
                    T = void 0,
                    x = void 0,
                    k = void 0,
                    S = void 0;
                switch (arguments.length - 1) {
                case 3:
                    m = 0, b = 0, _ = y, P = g, T = arguments[2], x = arguments[3], k = y, S = g;
                    break;
                case 5:
                    m = 0, b = 0, _ = y, P = g, T = arguments[2], x = arguments[3], k = arguments[4], S = arguments[5];
                    break;
                case 9:
                    m = arguments[2], b = arguments[3], _ = arguments[4], P = arguments[5], T = arguments[6], x = arguments[7], k = arguments[8], S = arguments[9]
                }
                var E = k / _,
                    O = S / P;
                if (E && O) {
                    var w = Math.max(E, O),
                        L = Math.pow(2, Math.ceil(Math.log(1.1 * w) / Math.log(2)));
                    if (L >= 1)
                        return e.drawImage.apply(e, i.apply(h, arguments)), !0;
                    var C = void 0;
                    if (f) {
                        C = "_cachedSmoothDownsample_from" + m + "," + b + "," + _ + "," + P + "@" + L + "x";
                        var F = t[C];
                        if (F)
                            return e.drawImage(F, 0, 0, F.width, F.height, T, x, k, S), !0
                    }
                    if (v)
                        return e.drawImage.apply(e, i.apply(h, arguments)), !1;
                    var B = 1,
                        V = _,
                        R = P,
                        j = Math.max(Math.pow(2, Math.ceil(Math.log(V) / Math.log(2))), a.width),
                        I = Math.max(Math.pow(2, Math.ceil(Math.log(R) / Math.log(2))), a.height);
                    for (a.width === j && a.height === I || (a.width = s.width = j, a.height = s.height = I), o.drawImage(t, m, b, _, P, 0, 0, _, P); B > L;) {
                        d.drawImage(a, 0, 0, V, R, 0, 0, V = Math.ceil(V / 2), R = Math.ceil(R / 2)), o.clearRect(0, 0, V, R);
                        var A = a;
                        a = s, s = A;
                        var D = o;
                        o = d, d = D, B /= 2
                    }
                    if (f) {
                        var M = document.createElement("canvas");
                        M.width = V, M.height = R, M.getContext("2d").drawImage(a, 0, 0), t[C] = M
                    }
                    return e.drawImage(a, 0, 0, V, R, T, x, k, S), o.clearRect(0, 0, _, P), d.clearRect(0, 0, _, P), !0
                }
            };
        u.usingCache = function() {
            return l = !0, this
        }, u.avoidingWorkIf = function(e) {
            return c = e, this
        };
        var h = [];
        t.a = u
    }, function(e, t, r) {
        "use strict";
        function i() {
            var e = "_callbacksForEventHandler" + ++n;
            return function(t) {
                var r = this[e] || (this[e] = []);
                if ("function" == typeof t)
                    return r.push(t);
                if (r)
                    for (var i = 0, n = r.length; i < n; ++i)
                        r[i](t)
            }
        }
        t.a = i;
        var n = 1
    }, function(e, t, r) {
        "use strict";
        function i(e) {
            var t = e && new DataView(e),
                r = {};
            return t && n(t) && a(t, r), r
        }
        function n(e) {
            return 65496 === e.getUint16(0)
        }
        function a(e, t) {
            for (var r = e.byteLength, i = 2; i < r;) {
                var n = e.getUint16(i);
                65505 === n && o(e, i + 4, t), 65472 !== n && 65474 !== n || s(e, i + 5, t), i += 2 + e.getUint16(i + 2)
            }
            return t
        }
        function o(e, t, r) {
            if (1165519206 !== e.getUint32(t))
                return r;
            var i = t + 6,
                n = void 0,
                a = e.getUint16(i);
            if (18761 === a)
                n = !0;
            else {
                if (19789 !== a)
                    return r;
                n = !1
            }
            for (var o = i + e.getUint32(i + 4, n), s = e.getUint16(o, n), l = 0; l < s; l++) {
                var c = o + 12 * l + 2,
                    h = e.getUint16(c, n);
                if (274 === h && (r.orientation = e.getUint16(c + 8, n)), 34665 === h) {
                    d(e, i, u(e, c, n), n, r)
                }
            }
            return r
        }
        function s(e, t, r) {
            return r.height = e.getUint16(t), r.width = e.getUint16(t + 2), r
        }
        function d(e, t, r, i, n) {
            var a = c(e, t + r, i),
                o = void 0;
            if (37500 in a) {
                o = a[37500];
                l(e, t + e.getUint32(o + 8), n)
            }
            return n
        }
        function l(e, t, r) {
            for (var i = "", n = 0; n < 9; n++)
                i += String.fromCharCode(e.getUint8(t + n));
            if ("Apple iOS" !== i)
                return r;
            var a = 18761 === e.getUint16(t + 9 + 3),
                o = c(e, t + 9 + 3 + 2, a);
            return 27 in o && (r.photosRenderEffect = u(e, o[27], a)), r
        }
        function c(e, t, r) {
            for (var i = e.getUint16(t, r), n = t + 2, a = {}, o = 0; o < i; o++) {
                var s = n + 12 * o;
                a[e.getUint16(s, r)] = s
            }
            return a
        }
        function u(e, t, r) {
            var i = e.getUint16(t + 2, r),
                n = e.getUint32(t + 4, r),
                a = e.getUint32(t + 8, r),
                o = [];
            switch (i) {
            case 3:
                if (1 === n)
                    return e.getUint16(t + 8, r);
                if (2 === n)
                    return [e.getUint16(t + 8, r), e.getUint16(t + 10, r)];
                for (var s = 0; s < n; s++)
                    o[s] = e.getUint16(a + 4 * s, r);
                return o;
            case 4:
                if (1 === n)
                    return a;
                for (var d = 0; d < n; d++)
                    o[d] = e.getUint32(a + 4 * d, r);
                return o;
            case 9:
                if (1 === n)
                    return e.getInt32(t + 8, r);
                for (var l = 0; l < n; l++)
                    o[l] = e.getInt32(a + 4 * l, r);
                return o;
            default:
                return null
            }
        }
        t.a = i
    }, function(e, t, r) {
        "use strict";
        function i() {
            for (var e = n() + n(); e.length < 16;)
                e += n();
            return e.slice(0, 16)
        }
        function n() {
            return Math.random().toString(16).substring(2)
        }
        t.a = i
    }, function(e, t, r) {
        "use strict";
        function i(e, t) {
            var r = e,
                i = r._computedStyle;
            i || (i = r._computedStyle = document.defaultView.getComputedStyle(e, null));
            var a = i.getPropertyValue(t);
            return !a && n.get(t) && (a = n.get(t)(i) || a), a
        }
        t.a = i;
        var n = function() {
                var e = new Map;
                return e.set("font", function(e) {
                    for (var t = "", r = 0, i = a.length; r < i; r++) {
                        var n = a[r],
                            o = e.getPropertyValue("font-" + n);
                        if (o && (t && (t += " "), t += o, "size" === n)) {
                            var s = e.getPropertyValue("line-height");
                            s && (t += "/" + s)
                        }
                    }
                    return t
                }), e
            }(),
            a = ["style", "variant", "weight", "size", "family"]
    }, function(e, t, r) {
        "use strict";
        function i(e, t, r, i, n, a, o) {
            var s = void 0;
            if ("string" == typeof e) {
                var d = e;
                "fit" === d && (s = !1), "cover" === d && (s = !0)
            } else
                s = !!e;
            var l = arguments.length;
            6 !== l && (o = l - 1);
            var c = void 0,
                u = void 0,
                h = void 0,
                p = void 0,
                f = void 0;
            if (2 === o || 3 === o) {
                var v = t,
                    y = r;
                u = v.height, c = v.width, p = y.height, h = y.width, f = i
            } else
                c = t, u = r, h = i, p = n, f = a;
            var g = c / u,
                m = h / p,
                b = s ? g < m : g > m;
            return f = f || {}, f.width = b ? h : p * g, f.height = b ? h / g : p, f
        }
        function n(e, t, r, n, a) {
            return i(!1, e, t, r, n, a, arguments.length)
        }
        t.a = n
    }, function(e, t, r) {
        "use strict";
        t.a = "1.5.4"
    }])
});
//# sourceMappingURL=resources/livephotoskit.js.map
