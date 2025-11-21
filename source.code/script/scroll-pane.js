/* ================================================================ */
/* ScrollPane JavaScript Definations(Since.1.0.0)                   */
/* ================================================================ */
(function() {
	/**
	 * 制御処理です。
	 */
	class ScrollPane {
		//#region メンバー変数定義
		/** @type {HTMLElement} 全体領域 */
		#sourcePane;
		/** @type {HTMLElement} 頭部領域 */
		#sourceHead;
		/** @type {HTMLElement} 本体領域 */
		#sourceBody;
		//#endregion メンバー変数定義

		//#region 生成メソッド定義:constructor
		/**
		 * 制御処理を生成します。
		 *
		 * @param {HTMLElement} source 全体領域
		 */
		constructor(source) {
			if (((this.#sourcePane = source) instanceof HTMLElement) === false) {
				throw new Error('scroll-pane is not HTMLElement.', { source: source });
			} else if ((this.#sourceHead = ScrollPane.#chooseNode(source.children, 'scroll-head')) === null) {
				throw new Error('scroll-pane children not found scroll-head definitions.');
			} else if ((this.#sourceBody = ScrollPane.#chooseNode(source.children, 'scroll-body')) === null) {
				throw new Error('scroll-pane children not found scroll-body definitions.');
			} else {
				this.#sourcePane.addEventListener('update', () => this.#updatePane());
				this.#sourceBody.addEventListener('scroll', () => this.#scrollNode());
				window.addEventListener('resize', () => this.#updatePane());
			}
		}
		//#endregion 生成メソッド定義:constructor

		//#region 内部メソッド定義:#chooseNode
		/**
		 * 要素情報を抽出します。
		 *
		 * @param {HTMLCollection} source - 要素集合
		 * @param {string}         search - 検索名称
		 * @returns {HTMLElement|null} 検索結果
		 */
		static #chooseNode(source, search) {
			const length = source.length;
			for (let index = 0; index < length; index ++) {
				let choose = source[index];
				if (choose.classList.contains(search)) {
					return choose;
				}
			}
			return null;
		}
		//#endregion 内部メソッド定義:#chooseNode

		//#region 内部メソッド定義:#updatePane/#scrollBody
		/**
		 * 表示領域を設定します。
		 */
		#updatePane() {
			this.#sourceHead.style.width = this.#sourceBody.clientWidth + 'px';
		}
		/**
		 * 表示位置を設定します。
		 */
		#scrollNode() {
			this.#sourceHead.scrollLeft = this.#sourceBody.scrollLeft;
		}
		//#endregion 内部メソッド定義:#updatePane/#scrollBody
	}

	//#region 操作処理定義
	/** 初期処理 */
	document.addEventListener('DOMContentLoaded', () => {
		document.querySelectorAll('.scroll-pane').forEach(choose => new ScrollPane(choose));
	});
	//#endregion 操作処理定義
})();
